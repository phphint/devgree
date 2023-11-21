import sys
from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline
from pdfminer.high_level import extract_text
import json
import traceback


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

if __name__ == "__main__":
    try:
        # Use the model directly from Hugging Face's repository
        model_identifier = "has-abi/distilBERT-finetuned-resumes-sections"
        tokenizer = AutoTokenizer.from_pretrained(model_identifier)
        model = AutoModelForTokenClassification.from_pretrained(model_identifier)
        ner_pipeline = pipeline("ner", model=model, tokenizer=tokenizer)

        if len(sys.argv) < 2:
            #log_debug("Error: No file path provided.")
            sys.exit(1)

        file_path = sys.argv[1]
        #log_debug(f"Parsing resume file: {file_path}")
        parsed_resume = parse_resume(file_path)

        #log_debug("Printing parsed resume data")
        result_json = {"soft_skills": parsed_resume}
        print(json.dumps(result_json, indent=4))
    except Exception as e:
        log_debug(f"Script error: {e}\n{traceback.format_exc()}")
