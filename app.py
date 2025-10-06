"""
Literature Review Assistant Web Application
Main Flask application for conducting systematic literature reviews with AI assistance
"""

from flask import Flask, render_template, request, jsonify, send_file, session
from flask_cors import CORS
import yaml
import json
import os
from datetime import datetime
import anthropic
from pathlib import Path

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')
CORS(app)

# Configuration
BASE_DIR = Path(__file__).parent
CONFIG_FILE = BASE_DIR / 'config.yaml'
OUTPUTS_DIR = BASE_DIR / 'outputs'
TEMPLATES_DIR = BASE_DIR / 'templates'

# Ensure outputs directory exists
OUTPUTS_DIR.mkdir(exist_ok=True)
for subdir in ['summaries', 'tables', 'detailed_notes', 'bibliography', 'visualizations']:
    (OUTPUTS_DIR / subdir).mkdir(exist_ok=True)

# Initialize Anthropic client (API key from environment variable)
def get_anthropic_client():
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if api_key:
        return anthropic.Anthropic(api_key=api_key)
    return None

@app.route('/')
def index():
    """Main page with parameter input form"""
    return render_template('index.html')

@app.route('/api/config/load', methods=['GET'])
def load_config():
    """Load existing configuration"""
    try:
        if CONFIG_FILE.exists():
            with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f)
            return jsonify({'success': True, 'config': config})
        else:
            # Load example config as default
            example_config = BASE_DIR / 'config.example.yaml'
            with open(example_config, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f)
            return jsonify({'success': True, 'config': config})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/config/save', methods=['POST'])
def save_config():
    """Save configuration to config.yaml"""
    try:
        config_data = request.json

        # Validate required fields
        required_fields = ['project_name', 'research_question']
        for field in required_fields:
            if field not in config_data or not config_data[field]:
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400

        # Save to config.yaml
        with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
            yaml.dump(config_data, f, default_flow_style=False, allow_unicode=True)

        # Also save to session
        session['config'] = config_data

        return jsonify({
            'success': True,
            'message': 'Configuration saved successfully',
            'config_path': str(CONFIG_FILE)
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/review/start', methods=['POST'])
def start_review():
    """Start literature review process using Claude API"""
    try:
        config_data = request.json

        # Get Anthropic client
        client = get_anthropic_client()
        if not client:
            return jsonify({
                'success': False,
                'error': 'ANTHROPIC_API_KEY not set in environment variables'
            }), 500

        # Build prompt for Claude
        prompt = build_review_prompt(config_data)

        # Store the task in session
        session['current_task'] = {
            'config': config_data,
            'status': 'started',
            'timestamp': datetime.now().isoformat()
        }

        return jsonify({
            'success': True,
            'message': 'Literature review task initiated',
            'prompt': prompt,
            'note': 'Use Claude Code CLI or API to execute this review'
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/review/prompt', methods=['POST'])
def get_review_prompt():
    """Generate prompt for Claude without starting the review"""
    try:
        config_data = request.json
        prompt = build_review_prompt(config_data)

        return jsonify({
            'success': True,
            'prompt': prompt
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/outputs/list', methods=['GET'])
def list_outputs():
    """List all generated output files"""
    try:
        outputs = {
            'summaries': [],
            'tables': [],
            'detailed_notes': [],
            'bibliography': [],
            'visualizations': []
        }

        for category in outputs.keys():
            category_path = OUTPUTS_DIR / category
            if category_path.exists():
                outputs[category] = [
                    {
                        'name': f.name,
                        'path': str(f.relative_to(BASE_DIR)),
                        'size': f.stat().st_size,
                        'modified': datetime.fromtimestamp(f.stat().st_mtime).isoformat()
                    }
                    for f in category_path.iterdir() if f.is_file()
                ]

        return jsonify({'success': True, 'outputs': outputs})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/outputs/download/<category>/<filename>')
def download_output(category, filename):
    """Download a specific output file"""
    try:
        file_path = OUTPUTS_DIR / category / filename
        if file_path.exists() and file_path.is_file():
            return send_file(file_path, as_attachment=True)
        else:
            return jsonify({'success': False, 'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/outputs/view/<category>/<filename>')
def view_output(category, filename):
    """View content of an output file"""
    try:
        file_path = OUTPUTS_DIR / category / filename
        if file_path.exists() and file_path.is_file():
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            return jsonify({
                'success': True,
                'filename': filename,
                'content': content,
                'category': category
            })
        else:
            return jsonify({'success': False, 'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

def build_review_prompt(config):
    """Build comprehensive prompt for Claude based on configuration"""

    prompt = f"""# Literature Review Task

## Project Information
- **Project Name**: {config.get('project_name', 'Unnamed Project')}
- **Researcher**: {config.get('researcher', 'Not specified')}
- **Date**: {datetime.now().strftime('%Y-%m-%d')}

## Research Question
{config.get('research_question', 'No research question provided')}

"""

    # Add sub-questions if available
    if config.get('sub_questions'):
        prompt += "### Sub-Questions:\n"
        for i, sq in enumerate(config['sub_questions'], 1):
            prompt += f"{i}. {sq}\n"
        prompt += "\n"

    # Add keywords
    if config.get('keywords'):
        prompt += "## Keywords\n"
        if isinstance(config['keywords'], dict):
            if config['keywords'].get('primary'):
                prompt += "**Primary**: " + ", ".join(config['keywords']['primary']) + "\n"
            if config['keywords'].get('secondary'):
                prompt += "**Secondary**: " + ", ".join(config['keywords']['secondary']) + "\n"
        elif isinstance(config['keywords'], list):
            prompt += ", ".join(config['keywords']) + "\n"
        prompt += "\n"

    # Add year range
    if config.get('year_range'):
        prompt += f"## Year Range\n{config['year_range'].get('start', 2020)} - {config['year_range'].get('end', 2025)}\n\n"

    # Add target papers
    if config.get('target_papers'):
        prompt += f"## Target Number of Papers\n{config['target_papers']} papers\n\n"

    # Add inclusion criteria
    if config.get('inclusion_criteria'):
        prompt += "## Inclusion Criteria\n"
        for criterion in config['inclusion_criteria']:
            prompt += f"- {criterion}\n"
        prompt += "\n"

    # Add exclusion criteria
    if config.get('exclusion_criteria'):
        prompt += "## Exclusion Criteria\n"
        for criterion in config['exclusion_criteria']:
            prompt += f"- {criterion}\n"
        prompt += "\n"

    # Add databases
    if config.get('databases'):
        prompt += "## Databases to Search\n"
        prompt += ", ".join(config['databases']) + "\n\n"

    # Add instructions
    prompt += """## Task Instructions

Please conduct a systematic literature review following these steps:

1. **Search Phase**: Search the specified databases using the keywords and criteria
2. **Screening Phase**: Filter papers based on inclusion/exclusion criteria
3. **Data Extraction**: Extract key information from each paper
4. **Analysis**: Analyze and synthesize findings
5. **Output Generation**: Generate the requested outputs

## Expected Outputs

Please create the following files in the outputs/ directory:

1. **Summary** (outputs/summaries/literature_review_summary.md):
   - Research question and methodology
   - Key findings synthesis
   - Research gaps identified
   - Future research recommendations

2. **Comparison Table** (outputs/tables/papers_comparison.md):
   - Authors, Year, Title
   - Methodology
   - Key Findings
   - Limitations
   - Citations

3. **Individual Paper Notes** (outputs/detailed_notes/):
   - One file per paper: paper_XXX_AuthorName_Year.md
   - Use the template from templates/paper_note_template.md

4. **Bibliography** (outputs/bibliography/references.bib):
   - BibTeX format for all papers

5. **Visualizations** (if applicable):
   - Timeline of publications
   - Keyword frequency analysis

Please proceed with the literature review based on these parameters.
"""

    return prompt

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    client = get_anthropic_client()
    return jsonify({
        'status': 'healthy',
        'anthropic_configured': client is not None,
        'outputs_directory': str(OUTPUTS_DIR),
        'config_exists': CONFIG_FILE.exists()
    })

if __name__ == '__main__':
    print("=" * 60)
    print("Literature Review Assistant Web Application")
    print("=" * 60)
    print(f"Base Directory: {BASE_DIR}")
    print(f"Outputs Directory: {OUTPUTS_DIR}")
    print(f"Config File: {CONFIG_FILE}")

    # Check for API key
    if not os.environ.get('ANTHROPIC_API_KEY'):
        print("\nWARNING: ANTHROPIC_API_KEY not set in environment variables")
        print("Some features may not work without it.")

    print("\nStarting Flask server...")
    print("Open http://localhost:5000 in your browser")
    print("=" * 60)

    app.run(debug=True, host='0.0.0.0', port=5000)
