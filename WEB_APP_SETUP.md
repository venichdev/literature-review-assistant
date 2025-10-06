# Literature Review Web App - Setup Guide

A modern web application for conducting systematic literature reviews with Claude AI assistance.

## Features

- **Interactive Parameter Configuration**: Web-based interface to set all review parameters
- **Claude AI Integration**: Generate prompts for Claude to conduct literature reviews
- **Real-time Results**: View and download generated outputs
- **Multiple Export Formats**: Support for Markdown, BibTeX, CSV, and JSON
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- (Optional) Anthropic API key for direct Claude integration

## Quick Start

### 1. Install Dependencies

```bash
# Install Python packages
pip install -r requirements.txt
```

### 2. Set Up Environment Variables (Optional)

If you want to use the Anthropic API directly:

```bash
# On Windows (Command Prompt)
set ANTHROPIC_API_KEY=your_api_key_here

# On Windows (PowerShell)
$env:ANTHROPIC_API_KEY="your_api_key_here"

# On Linux/Mac
export ANTHROPIC_API_KEY=your_api_key_here
```

Or create a `.env` file in the project root:

```
ANTHROPIC_API_KEY=your_api_key_here
SECRET_KEY=your-secret-key-for-sessions
```

### 3. Run the Web Application

```bash
python app.py
```

The application will start on `http://localhost:5000`

### 4. Access the Web Interface

Open your web browser and navigate to:

```
http://localhost:5000
```

## How to Use

### Step 1: Configure Your Literature Review

1. **Basic Info Tab**:
   - Enter project name (required)
   - Add research question (required)
   - Optional: researcher name, institution, sub-questions

2. **Keywords Tab**:
   - Add primary keywords (required)
   - Add secondary and optional keywords
   - Select databases to search
   - Optional: custom boolean search string

3. **Filters Tab**:
   - Set year range
   - Configure citation thresholds
   - Set target number of papers
   - Add preferred journals/conferences

4. **Criteria Tab**:
   - Define inclusion criteria
   - Define exclusion criteria
   - Optional: thematic categories
   - Optional: technical details to extract

5. **Output Tab**:
   - Choose output formats
   - Select citation style
   - Enable/disable visualizations
   - Configure cross-referencing

### Step 2: Save Configuration

Click the **"Save Configuration"** button to save your parameters to `config.yaml`

### Step 3: Generate Prompt or Start Review

#### Option A: Generate Prompt (Recommended)
1. Click **"Generate Prompt"**
2. Copy the generated prompt
3. Use it with Claude Code CLI or Claude web interface
4. Claude will conduct the review and save outputs

#### Option B: Start Review (API Required)
1. Ensure `ANTHROPIC_API_KEY` is set
2. Click **"Start Review"**
3. The system will initiate the review via API

### Step 4: View Results

1. Click **"View Outputs"** to see generated files
2. View files directly in the browser
3. Download files individually or by category

## Project Structure

```
literature-review-web-app/
│
├── app.py                     # Flask backend application
├── requirements.txt           # Python dependencies
├── WEB_APP_SETUP.md          # This file
│
├── templates/                 # HTML templates
│   └── index.html            # Main web interface
│
├── static/                    # Static files
│   ├── css/
│   │   └── style.css         # Stylesheet
│   └── js/
│       └── app.js            # Frontend JavaScript
│
├── outputs/                   # Generated outputs (auto-created)
│   ├── summaries/
│   ├── tables/
│   ├── detailed_notes/
│   ├── bibliography/
│   └── visualizations/
│
├── config.yaml               # Saved configuration (created on first save)
└── config.example.yaml       # Example configuration
```

## API Endpoints

### Configuration
- `GET /api/config/load` - Load existing configuration
- `POST /api/config/save` - Save configuration to config.yaml

### Review Operations
- `POST /api/review/prompt` - Generate prompt for Claude
- `POST /api/review/start` - Start review (requires API key)

### Outputs
- `GET /api/outputs/list` - List all generated outputs
- `GET /api/outputs/view/<category>/<filename>` - View file content
- `GET /api/outputs/download/<category>/<filename>` - Download file

### Health
- `GET /api/health` - Check application status

## Working with Claude Code

### Method 1: Copy-Paste Prompt

1. Generate prompt in the web app
2. Copy the generated prompt
3. Open Claude Code CLI:
   ```bash
   claude
   ```
4. Paste the prompt and let Claude conduct the review

### Method 2: Save Prompt to File

1. Generate and copy the prompt
2. Save to a file:
   ```bash
   # Create a prompt file
   echo "YOUR_COPIED_PROMPT" > review_prompt.txt
   ```
3. Run with Claude Code:
   ```bash
   claude < review_prompt.txt
   ```

### Method 3: Direct API Integration

If you have an Anthropic API key set:

1. Click "Start Review" in the web app
2. The app will communicate with Claude API
3. Results will be saved to outputs/

## Troubleshooting

### Port Already in Use

If port 5000 is already in use, modify `app.py`:

```python
app.run(debug=True, host='0.0.0.0', port=8080)  # Change port
```

### CORS Issues

If you encounter CORS issues, ensure Flask-CORS is installed:

```bash
pip install Flask-CORS
```

### Missing Outputs Directory

The app automatically creates output directories. If issues persist:

```bash
mkdir -p outputs/summaries outputs/tables outputs/detailed_notes outputs/bibliography outputs/visualizations
```

### API Key Not Working

1. Verify your API key is correct
2. Check environment variables:
   ```bash
   # Windows PowerShell
   $env:ANTHROPIC_API_KEY

   # Linux/Mac
   echo $ANTHROPIC_API_KEY
   ```
3. Restart the Flask app after setting environment variables

## Production Deployment

### Security Considerations

1. **Change Secret Key**:
   ```python
   # In app.py or .env
   SECRET_KEY='your-random-secure-key-here'
   ```

2. **Disable Debug Mode**:
   ```python
   app.run(debug=False, host='0.0.0.0', port=5000)
   ```

3. **Use HTTPS**: Deploy behind a reverse proxy (nginx, Apache)

4. **Protect API Keys**: Never commit `.env` or `config.yaml` to version control

### Deployment Options

#### Option 1: Local Network
```bash
python app.py
# Access from other devices: http://YOUR_IP:5000
```

#### Option 2: Cloud Deployment (Heroku, Railway, etc.)
1. Add `Procfile`:
   ```
   web: python app.py
   ```
2. Set environment variables in platform dashboard
3. Deploy via Git push

#### Option 3: Docker
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

## Tips for Best Results

1. **Start Broad**: Begin with general keywords, refine based on results
2. **Save Frequently**: Save your configuration as you refine parameters
3. **Review Prompts**: Always review generated prompts before use
4. **Iterate**: Run multiple searches with different parameters
5. **Verify Results**: Cross-check AI-generated summaries with original papers

## Support

- **Documentation**: See `docs/` folder for more details
- **Issues**: Report bugs or request features on GitHub
- **Examples**: Check `config.example.yaml` for configuration examples

## License

MIT License - See LICENSE file for details

---

**Happy Researching!** 🎓

*Last Updated: October 2025*
