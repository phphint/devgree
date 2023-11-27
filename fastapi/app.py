from fastapi import FastAPI, UploadFile, File, HTTPException, Request

from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline
from pdfminer.high_level import extract_text
import json
import torch
import os
import datetime
import uuid


app = FastAPI()

# Preload model and tokenizer

# Local path to the model
model_path = "/app/distilBERT-finetuned-resumes-sections"

# Preload model and tokenizer
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForTokenClassification.from_pretrained(model_path)
ner_pipeline = pipeline("ner", model=model, tokenizer=tokenizer)

known_soft_skills = {
    'javascript', 'python', 'java', 'c++', 'c#', 'ruby', 'php', 'swift', 'kotlin',
    'sql', 'nosql', 'html', 'css', 'react', 'angular', 'vue', 'node.js', 'django',
    'flask', 'spring', 'laravel', 'asp.net', 'ruby on rails', 'wordpress', 'drupal',
    'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'jenkins', 'ci/cd', 'devops',
    'machine learning', 'data analysis', 'data mining', 'ai', 'nlp', 'computer vision',
    'deep learning', 'tensorflow', 'pytorch', 'pandas', 'numpy', 'scipy', 'matplotlib',
    'git', 'svn', 'mercurial', 'agile', 'scrum', 'kanban', 'jira', 'trello',
    'linux', 'unix', 'bash', 'shell scripting', 'powershell', 'networking', 'security',
    'cybersecurity', 'penetration testing', 'ethical hacking', 'blockchain', 'cryptocurrency',
    'iot', 'embedded systems', 'mobile development', 'android', 'ios', 'restful api',
    'graphql', 'websockets', 'microservices', 'big data', 'hadoop', 'spark', 'data warehousing',
    'etl', 'bi tools', 'tableau', 'power bi', 'sap', 'erp', 'crm', 'salesforce', 'adobe suite',
    'autocad', 'solidworks', '3d modeling', 'virtualization', 'vmware', 'hyper-v', 'cloud computing',
    'system administration', 'database administration', 'network administration', 'technical support',
    'seo', 'digital marketing', 'ppc', 'Laravel', 'laravel'
}


def log_debug(message):
    print(f"DEBUG: {message}")

def parse_resume(file_path):
    try:
        text = extract_text(file_path)
        ner_results = ner_pipeline(text)

        # Parse NER results first
        parsed_data = parse_ner_results(ner_results, 'soft_skills')

        # Perform additional keyword matching
        additional_skills = keyword_matching(text, known_soft_skills)
        parsed_data.extend(additional_skills)

        return parsed_data
    except Exception as e:
        return {}

def keyword_matching(text, skill_set):
    # Find all occurrences of the known skills in the text
    found_skills = []
    for skill in skill_set:
        if skill.lower() in text.lower():
            found_skills.append(skill)
    return found_skills

    
def add_to_structure(structured_data, label, word):
    
    # Define a more advanced filter function
    def is_valid_skill(word):
        # Exclude short words, special characters, and common non-skill words
        invalid_words = {"and", "with", "via", "as", "is", "a", ".", ",", "/"}  # Add more as needed
        return len(word) > 2 and word.isalpha() and word.lower() not in invalid_words


    if is_valid_skill(word):
        if label not in structured_data:
            structured_data[label] = []
        structured_data[label].append(word)

def parse_ner_results(ner_results, target_label):
    structured_data = {'soft_skills': []}
    current_word = ""
    current_label = ""

    for item in ner_results:
        label = item['entity'].lower()
        word = item['word']

        # Handle subword tokens
        if word.startswith("##"):
            current_word += word[2:]
        else:
            if current_word:
                # Add the completed word to the appropriate category
                add_to_structure(structured_data, current_label, current_word)
            current_word = word
            current_label = label

    # Add the last word if there is one
    if current_word:
        add_to_structure(structured_data, current_label, current_word)

    return structured_data['soft_skills']  # Return only soft_skills part


# Define your existing functions here (parse_resume, keyword_matching, etc.)

@app.post("/parse-resume/")
async def parse_resume_endpoint(request: Request, file: UploadFile = File(...)):
    # Generate a unique file name using timestamp and UUID
    unique_filename = f"temp_resume_{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}_{uuid.uuid4()}.pdf"

    try:
        # Log request headers
        log_debug(f"Receiving upload request - Headers: {request.headers}")

        # Read and log file content
        content = await file.read()
        log_debug(f"Uploaded file content (truncated): {content[:500]}")

        # Write to a unique temporary file to use with extract_text
        with open(unique_filename, "wb") as temp_file:
            temp_file.write(content)

        parsed_data = parse_resume(unique_filename)

        # Delete the unique temporary file after processing
        os.remove(unique_filename)

        return {"soft_skills": parsed_data}

    except Exception as e:
        log_debug(f"Error processing request: {str(e)}")
        # Delete the unique temporary file in case of an exception
        if os.path.exists(unique_filename):
            os.remove(unique_filename)
        raise HTTPException(status_code=500, detail=str(e))

