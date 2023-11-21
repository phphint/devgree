import sys
import json
import requests
import mimetypes
import magic  # Importing the magic module
import os  # Importing the os module
import PyPDF2
from pdfminer.high_level import extract_text
import bleach
import re

# Function to clean and extract data enclosed in ```json * ```
def clean_extracted_data(text):
    pattern = r"```json(.*?)```"  # Regular expression pattern
    matches = re.findall(pattern, text, re.DOTALL)  # DOTALL to match across lines
    if matches:
        return matches[0].strip()  # Return the first match, stripped of leading/trailing whitespace
    return ""  # Return empty string if no matches


def find_urls_in_text(string):
    regex = r"(https?://\S+)"
    urls = re.findall(regex, string)
    return urls


def extract_urls_with_pypdf2(file_path):
    urls = []
    with open(file_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)

        for page in reader.pages:
            text = page.extract_text()
            if text:
                page_urls = find_urls_in_text(text)
                urls.extend(page_urls)

    return urls


# Function to extract and sanitize text from PDF
def extract_text_from_pdf(file_path):
    try:
        extracted_text = extract_text(file_path)
        sanitized_text = bleach.clean(extracted_text, strip=True)  # Sanitize the extracted text
        return sanitized_text
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        raise

# Function to extract text from DOC or DOCX
def extract_text_from_doc(doc_path):
    # Implement DOC or DOCX text extraction logic here
    try:
        # Placeholder for DOC/DOCX extraction logic
        pass
    except Exception as e:
        print(f"Error extracting text from DOC/DOCX: {e}")
        raise

# Function to check if text is in a resume format
def is_resume_format(text):
    resume_keywords = [
    'education', 'educational', 'academics', 'academic',
    'experience', 'experiences', 'work', 'workplace', 'employment', 'job', 'jobs', 'career', 'careers', 
    'skills', 'skillset', 'abilities', 'competency', 'competencies',
    'projects', 'project', 'portfolio', 
    'certifications', 'certification', 'cert', 'certs', 'credential', 'credentials', 
    'volunteer', 'volunteering', 'volunteerWork', 
    'languages', 'language', 
    'interests', 'interest', 'hobbies', 'hobby',
    'professionalDevelopment', 'professional', 'development', 'training', 'trainings', 
    'objective', 'goals', 'aspirations', 
    'personalDetails', 'personal', 'details', 'contact', 'contacts', 'profile', 
    'fullName', 'name', 'email', 'phone', 'location', 'address', 'profilePicture'
    ]

    return any(keyword.lower() in text.lower() for keyword in resume_keywords)

# Function to read system message from a file as plain text
def read_system_message_from_file(file_path="/app/controllers/chatgpt-resume-dialog-instruct.txt"):
    try:
        with open(file_path, 'r') as file:
            content = file.read().strip()
            return ("Please parse the resume text provided below and structure the information according to the following JSON schema: " 
                    + content 
                    + " Please process the provided resume text and organize the data according to the JSON schema provided. Ensure all keys from the schema are included in the final JSON output, even if there's no data available for some of them. Leave the value fields blank or null for keys where specific data isn't provided in the resume. Do not omit any keys from the schema, regardless of data availability. The purpose is to capture all possible information from the resume for database importation, ensuring a comprehensive and accurate representation of the resume structure in the JSON format.")
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        raise

# Function to send text to OpenAI in JSON mode and get the response
def query_openai_json_mode(text):
    openai_url = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {os.getenv('OPENAI_API_KEY')}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "gpt-4-1106-preview",
       # "json_mode": True,
        "messages": [
            {"role": "system", "content": read_system_message_from_file()},
            {"role": "user", "content": text}
        ]
    }
    response = requests.post(openai_url, headers=headers, json=data)
    return response.json()

 
        
if __name__ == "__main__":

    if len(sys.argv) < 2:
        print("Error: No file path provided.", file=sys.stderr)  # Log to stderr
        sys.exit(1)

    file_path = sys.argv[1]
    mime_type = magic.from_file(file_path, mime=True)

    try:
        #print(f"Processing file: {file_path} (MIME type: {mime_type})", file=sys.stderr)

        #print(f"Processing file: {file_path} (MIME type: {mime_type})", file=sys.stderr)  # Log to stderr

        if mime_type == 'application/pdf':
                text = extract_text_from_pdf(file_path)
                # no way to get urls in pdfs urls = extract_urls_with_pypdf2(file_path)
                #  print("Extracted URLs:", urls)

        elif mime_type in ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']:
            text = extract_text_from_doc(file_path)
        else:
            raise ValueError(f"Unsupported file type: {mime_type}")

        if is_resume_format(text):
            # Prepare data for API request
            data_to_send = {
                "model": "gpt-4-1106-preview",
                "messages": [
                    {"role": "system", "content": read_system_message_from_file()},
                    {"role": "user", "content": text}
                ]
            }
            #print("Data being sent to API:", json.dumps(data_to_send, indent=2))  # Debugging: Print data being sent

            response = query_openai_json_mode(text)
            
            # Send only the JSON response to stdout
            if isinstance(response, dict):
                assistant_message = response['choices'][0]['message']['content']
                cleaned_data = clean_extracted_data(assistant_message)  # Clean and extract data
                try:
                    json_object = json.loads(cleaned_data)  # Convert string to JSON object
                    print(json.dumps(json_object))  # Print JSON strin
                except json.JSONDecodeError as e:
                  with open("error_output_resume_parser.txt", "w") as file:
                     file.write("Error converting to JSON in Python Script: " + str(e) + "\n")
                     file.write("Failed Data:\n")
                     file.write(cleaned_data)
                  print("Error information written to error_output_resume_parser.txt", file=sys.stderr)
            else:
                print("Received non-JSON response:", file=sys.stderr)
                print(response, file=sys.stderr)
        else:
            print("The provided text does not appear to be in a resume format.", file=sys.stderr)
    except Exception as e:
        print(f"Error processing file {file_path}: {e}", file=sys.stderr)
