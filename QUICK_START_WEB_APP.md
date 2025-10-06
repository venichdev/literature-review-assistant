# Quick Start - Literature Review Web App

Get started in 3 minutes! 🚀

## Prerequisites

- Python 3.8+
- Web browser

## Installation

### Windows
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the app
.\start_webapp.bat
```

### Linux/Mac
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Make script executable
chmod +x start_webapp.sh

# 3. Run the app
./start_webapp.sh
```

### Manual Start
```bash
python app.py
```

## Access

Open browser: **http://localhost:5000**

## Quick Workflow

### 1️⃣ Configure (2 minutes)

**Basic Info Tab:**
- Project Name: "My Literature Review"
- Research Question: "What are the current approaches to [your topic]?"

**Keywords Tab:**
- Add 3-5 primary keywords
- Select databases (check Google Scholar, IEEE)

**Filters Tab:**
- Year Range: 2020-2025
- Target Papers: 30-40

**Criteria Tab:**
- Keep default inclusion/exclusion criteria
- Or customize as needed

**Output Tab:**
- Keep defaults (Markdown + BibTeX)

### 2️⃣ Save Configuration

Click: **"Save Configuration"** button

### 3️⃣ Generate Prompt

Click: **"Generate Prompt"** button

### 4️⃣ Use with Claude

**Option A - Claude Code CLI:**
```bash
claude
# Paste the generated prompt
```

**Option B - Claude Web/Desktop:**
- Copy the prompt
- Paste into Claude chat
- Claude performs the review

### 5️⃣ View Results

Click: **"View Outputs"** button
- See all generated files
- Download or view online

## Example Configuration

```yaml
Project: "Deep Learning for Computer Vision"
Question: "What are recent deep learning architectures for image classification?"

Keywords:
- deep learning
- computer vision
- image classification
- neural networks

Years: 2022-2025
Target: 40 papers
Databases: Google Scholar, arXiv, IEEE
```

## Common Tasks

### Load Saved Config
```
1. Click "Load Config"
2. Edit as needed
3. Click "Save Configuration"
```

### View Previous Outputs
```
1. Click "View Outputs"
2. Browse by category
3. Click "View" or "Download"
```

### Update Review
```
1. Load existing config
2. Modify parameters
3. Generate new prompt
4. Run with Claude
5. New outputs appear in outputs/
```

## File Locations

```
project/
├── app.py                    # Web server
├── config.yaml              # Your saved config
├── outputs/                 # Generated files
│   ├── summaries/          # Main review summary
│   ├── tables/             # Comparison tables
│   ├── detailed_notes/     # Individual papers
│   ├── bibliography/       # BibTeX files
│   └── visualizations/     # Charts & graphs
└── templates/              # Web UI
```

## Troubleshooting

**Port already in use?**
```python
# Edit app.py, line ~520:
app.run(debug=True, port=8080)  # Change port
```

**Dependencies missing?**
```bash
pip install -r requirements.txt
```

**Can't save config?**
```bash
# Check file permissions
ls -la config.yaml
```

## Tips

✅ **DO:**
- Start with broad keywords, refine later
- Save configuration frequently
- Review generated outputs for accuracy
- Iterate and improve

❌ **DON'T:**
- Make keywords too specific initially
- Set citation threshold too high for recent papers
- Forget to verify AI-generated content
- Skip saving your configuration

## Next Steps

📖 **Full Documentation:**
- Setup: `WEB_APP_SETUP.md`
- Usage: `USAGE_GUIDE.md`
- Examples: `config.example.yaml`

🔧 **Advanced:**
- Use `.env` file for API keys
- Customize output templates
- Integrate with reference managers
- Automate with scripts

## Support

- Issues: GitHub Issues
- Docs: `docs/` folder
- Examples: `config.example.yaml`

---

**Ready to start? Run the app and open http://localhost:5000** 🎓
