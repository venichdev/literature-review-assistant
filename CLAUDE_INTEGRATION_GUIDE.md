# Claude Integration Guide

Complete guide for using the Literature Review Web App with Claude AI.

## 🎯 Three Integration Methods

### Quick Comparison

| Method | Setup Time | Cost | Automation | Best For |
|--------|------------|------|------------|----------|
| **CLI** | 30 seconds | Free | Semi-auto | Everyone |
| **API** | 5 minutes | Paid | Full-auto | Power users |
| **Web** | 0 seconds | Free/Paid | Manual | Quick tasks |

---

## Method 1: Claude Code CLI Integration ⭐ RECOMMENDED

### Prerequisites
- Claude Code CLI installed
- Web app running

### Complete Walkthrough

#### Step 1: Start Web App
```bash
# Terminal 1
python app.py
```
Open browser: **http://localhost:5000**

#### Step 2: Configure Your Review

Fill out the form:

**Basic Info Tab:**
```
Project Name: Deep Learning for NLP
Research Question: What are recent transformer architectures for natural language processing?
Researcher: Your Name
```

**Keywords Tab:**
```
Primary Keywords:
- transformer
- natural language processing
- deep learning
- attention mechanism

Databases:
☑ Google Scholar
☑ arXiv
☑ ACM Digital Library
```

**Filters Tab:**
```
Year Range: 2022 - 2025
Min Citations: 10
Target Papers: 30
```

**Criteria Tab:**
```
Inclusion:
- Peer-reviewed publication
- English language
- Contains experimental results

Exclusion:
- Survey papers
- Non-English
```

**Output Tab:**
```
Formats:
☑ Markdown
☑ BibTeX

Citation Style: IEEE
```

Click **"Save Configuration"**

#### Step 3: Generate Prompt

1. Click **"Generate Prompt"** button
2. Popup appears with prompt
3. Click **"Copy"** button (or select all and Ctrl+C)

#### Step 4: Use with Claude Code

Open new terminal:

```bash
# Terminal 2
claude
```

You'll see:
```
Claude Code CLI v1.x
Type your message (or 'exit' to quit):

>
```

Paste the prompt and press Enter.

#### Step 5: Claude Executes

Claude will:
```
> I'll conduct a systematic literature review based on your parameters.

Starting literature search for "transformer" AND "natural language processing"...

Found 150 papers in Google Scholar...
Filtering by year range (2022-2025)...
Applying citation threshold (min 10)...
After filtering: 75 papers

Screening papers based on inclusion/exclusion criteria...
Reading abstracts...
After screening: 35 papers

Selecting top 30 papers by relevance and citations...

Now extracting detailed information from each paper...

[Progress updates...]

Generated outputs:
✓ outputs/summaries/literature_review_summary.md
✓ outputs/tables/papers_comparison.md
✓ outputs/detailed_notes/paper_001_Vaswani_2023.md
✓ outputs/detailed_notes/paper_002_Devlin_2023.md
... (28 more)
✓ outputs/bibliography/references.bib

Literature review complete!
```

#### Step 6: View Results

Back in web browser:
1. Click **"View Outputs"** button
2. Browse categories
3. Click **"View"** to read
4. Click **"Download"** to save locally

### Pro Tips for CLI Method

**1. Keep Terminal Open:**
```bash
# Don't close Claude session
# You can ask follow-up questions:

> Can you add 10 more papers focusing on BERT variants?
> Generate a visualization timeline
> Export the comparison table as CSV
```

**2. Iterative Refinement:**
```bash
# First run: broad search
> [paste prompt]

# Analyze results, then:
> Now add papers specifically about GPT-4 and LLaMA

# After that:
> Update the summary with these new findings
```

**3. Project Context:**
```bash
# Claude Code has access to your files
> Cross-reference these findings with my existing notes in theory_and_references/
```

---

## Method 2: Direct API Integration

### Complete Setup

#### Step 1: Get API Key

1. Visit: **https://console.anthropic.com/**
2. Sign up or log in
3. Navigate to **API Keys**
4. Click **"Create Key"**
5. Copy the key (starts with `sk-ant-`)

#### Step 2: Configure Environment

**Option A: Environment Variable**

Windows (PowerShell):
```powershell
# Temporary (current session only)
$env:ANTHROPIC_API_KEY="sk-ant-your-key-here"

# Permanent (system-wide)
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_API_KEY', 'sk-ant-your-key-here', 'User')
```

Linux/Mac:
```bash
# Temporary
export ANTHROPIC_API_KEY=sk-ant-your-key-here

# Permanent (add to ~/.bashrc or ~/.zshrc)
echo 'export ANTHROPIC_API_KEY=sk-ant-your-key-here' >> ~/.bashrc
source ~/.bashrc
```

**Option B: .env File** (Recommended)

```bash
# Copy example
cp .env.example .env

# Edit .env file
nano .env  # or use any text editor
```

Add:
```env
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
SECRET_KEY=generate-random-secret-key-here
FLASK_ENV=production
```

#### Step 3: Install Dependencies

```bash
pip install python-dotenv anthropic
```

#### Step 4: Verify Setup

```bash
# Start the app
python app.py

# You should see:
# ANTHROPIC_API_KEY: ✓ Configured
```

Or check via API:
```bash
curl http://localhost:5000/api/health
```

Response:
```json
{
  "status": "healthy",
  "anthropic_configured": true,
  "outputs_directory": "C:\\...\\outputs",
  "config_exists": true
}
```

### Using API Mode

#### Step 1: Configure Review
(Same as Method 1)

#### Step 2: Start Review

Click **"Start Review"** button (not "Generate Prompt")

#### Step 3: Wait for Completion

The web app will:
- Send prompt to Claude API
- Claude processes in background
- Files saved automatically to `outputs/`

You'll see:
```
✓ Review initiated successfully
✓ Processing...
✓ Complete! View outputs.
```

#### Step 4: View Results

Click **"View Outputs"** - all files ready!

### API Usage Notes

**Cost:**
- Based on tokens used
- Typical review: $1-5 depending on paper count
- Check pricing: https://www.anthropic.com/pricing

**Rate Limits:**
- Default: 50 requests/minute
- Large reviews may need batching

**Error Handling:**
```python
# The app handles errors gracefully
# Check console output for details
```

---

## Method 3: Claude Web/Desktop Interface

### When to Use
- No CLI available
- Quick one-off reviews
- Testing prompts
- Learning the workflow

### Walkthrough

#### Step 1: Generate Prompt
1. Configure review in web app
2. Click **"Generate Prompt"**
3. Copy the entire prompt

#### Step 2: Open Claude

**Web:** https://claude.ai
**Desktop:** Launch Claude app

#### Step 3: New Conversation

Paste the full prompt and send.

#### Step 4: Claude Responds

Claude will provide text outputs like:
```markdown
# Literature Review Summary

## Research Question
What are recent transformer architectures for NLP?

## Methodology
Searched Google Scholar, arXiv, ACM for papers from 2022-2025...

## Key Findings
1. Vision Transformers (ViT) show 15% improvement...
2. BERT variants dominate...
...

## Papers Comparison Table
| Authors | Year | Title | Method | Results |
|---------|------|-------|--------|---------|
| Smith et al. | 2024 | ... | ... | ... |

...
```

#### Step 5: Manual Save

**Save Each Section:**

1. **Summary:**
```bash
# Copy the summary section
# Save to: outputs/summaries/literature_review_summary.md
```

2. **Table:**
```bash
# Copy the comparison table
# Save to: outputs/tables/papers_comparison.md
```

3. **Individual Papers:**
```bash
# Copy each paper note
# Save to: outputs/detailed_notes/paper_001_Author_Year.md
```

4. **Bibliography:**
```bash
# Copy BibTeX entries
# Save to: outputs/bibliography/references.bib
```

#### Step 6: View in Web App

After manually saving files, click "View Outputs" in web app.

### Tips for Web Method

**1. Request Outputs Separately:**
```
First message:
"Generate the literature review summary only"

Second message:
"Now generate the comparison table"

Third message:
"Now generate detailed notes for papers 1-10"
```

**2. Use Code Blocks:**
Ask Claude to format outputs in code blocks for easy copying:
```
"Please provide the BibTeX in a code block"
```

**3. Download as Files:**
In Claude interface, you can sometimes download responses directly.

---

## Troubleshooting

### Issue: "Claude Code not found"

**Solution:**
```bash
# Check if installed
claude --version

# If not found, install Claude Code CLI
# Follow: https://docs.anthropic.com/claude/docs/claude-code
```

### Issue: "API key invalid"

**Solutions:**

1. **Check key format:**
```bash
# Should start with sk-ant-
echo $ANTHROPIC_API_KEY
```

2. **Verify on console:**
- Go to https://console.anthropic.com/
- Check if key is active
- Regenerate if needed

3. **Restart app after setting:**
```bash
# Stop the app (Ctrl+C)
# Restart
python app.py
```

### Issue: "Outputs not appearing"

**Solutions:**

1. **Check Claude's working directory:**
```bash
# In Claude session:
> pwd  # Should be your project directory
```

2. **Verify outputs folder:**
```bash
ls -la outputs/
# Should have: summaries/, tables/, detailed_notes/, etc.
```

3. **Check permissions:**
```bash
chmod -R 755 outputs/
```

### Issue: "Prompt too long"

**Solutions:**

1. **Reduce paper count:**
```
Target Papers: 20 instead of 50
```

2. **Simplify criteria:**
```
Remove optional technical details
```

3. **Split into multiple reviews:**
```
Review 1: 2023-2025
Review 2: 2020-2022
```

---

## Advanced Integration

### Automated Pipeline

**Setup cron job for regular reviews:**

```bash
# Create script: run_review.sh
#!/bin/bash
cd /path/to/project
source .env
curl -X POST http://localhost:5000/api/review/start \
  -H "Content-Type: application/json" \
  -d @saved_config.json
```

**Schedule:**
```bash
# Run weekly
0 0 * * 0 /path/to/run_review.sh
```

### Batch Processing

**Review multiple topics:**

```bash
# Create configs
config_nlp.yaml
config_computer_vision.yaml
config_robotics.yaml

# Process each
for config in config_*.yaml; do
  # Load in web app
  # Generate prompt
  # Run with Claude
done
```

### CI/CD Integration

**GitHub Actions example:**

```yaml
name: Weekly Literature Review
on:
  schedule:
    - cron: '0 0 * * 0'
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          pip install -r requirements.txt
          python run_automated_review.py
```

---

## Best Practices

### 1. Start with CLI Method
- Learn the workflow
- No setup needed
- Free to use

### 2. Upgrade to API for Automation
- Once workflow is proven
- For repeated reviews
- Worth the cost

### 3. Use Web for Quick Tests
- Try different prompts
- Learn prompt engineering
- Explore Claude's capabilities

### 4. Combine Methods
```
1. Test prompt via Web
2. Refine in Web App
3. Run final via CLI
4. Automate with API
```

---

## Examples

### Example 1: CLI Workflow

```bash
# Terminal 1: Start web app
python app.py

# Browser: Configure and generate prompt

# Terminal 2: Run with Claude
claude
> [paste prompt]

# Claude executes and saves files

# Browser: View outputs
```

### Example 2: API Workflow

```bash
# One-time setup
export ANTHROPIC_API_KEY=sk-ant-...

# Start app
python app.py

# Browser: Click "Start Review"
# Wait...
# Click "View Outputs"
```

### Example 3: Iterative Workflow

```bash
# Round 1: Broad search
claude
> [paste initial prompt]

# Analyze gaps in summary

# Round 2: Focused search
# Update keywords in web app
# Generate new prompt
> [paste refined prompt]

# Merge outputs manually
```

---

## Summary

**Recommended Path:**

1. **Beginners**: Start with CLI (Method 1)
2. **Regular Users**: Set up API (Method 2)
3. **Occasional**: Use Web (Method 3)

**All methods work with the same web app interface!**

Choose based on:
- Technical comfort level
- Frequency of use
- Budget constraints
- Automation needs

---

**Next Steps:**

1. Choose your method
2. Follow the walkthrough above
3. Try with a small test review
4. Scale up to full reviews

Need help? Check the troubleshooting section or consult `USAGE_GUIDE.md`

---

*Last Updated: October 2025*
