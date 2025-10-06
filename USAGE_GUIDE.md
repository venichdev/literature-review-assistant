# Literature Review Web App - Usage Guide

Complete guide on using the web application with Claude Code for conducting systematic literature reviews.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Web Interface Overview](#web-interface-overview)
3. [Configuring Your Review](#configuring-your-review)
4. [Working with Claude Code](#working-with-claude-code)
5. [Viewing and Managing Outputs](#viewing-and-managing-outputs)
6. [Advanced Usage](#advanced-usage)
7. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Starting the Web Application

**Windows:**
```bash
# Double-click start_webapp.bat
# OR run in terminal:
.\start_webapp.bat
```

**Linux/Mac:**
```bash
# Make executable (first time only):
chmod +x start_webapp.sh

# Run:
./start_webapp.sh
```

**Manual Start:**
```bash
# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

### Accessing the Interface

Open your browser and go to: **http://localhost:5000**

---

## Web Interface Overview

### Main Components

1. **Header**
   - Logo and title
   - "Load Config" button - Load saved configuration
   - "View Outputs" button - Browse generated files

2. **Navigation Tabs**
   - **Basic Info** - Project details and research question
   - **Keywords** - Search terms and databases
   - **Filters** - Year range, citations, paper count
   - **Criteria** - Inclusion/exclusion rules
   - **Output** - Export formats and visualizations

3. **Action Buttons**
   - **Reset** - Clear form to defaults
   - **Save Configuration** - Save to config.yaml
   - **Generate Prompt** - Create prompt for Claude
   - **Start Review** - Initiate review (requires API key)

---

## Configuring Your Review

### Step 1: Basic Information

**Required Fields:**
- **Project Name**: Descriptive name for your review
  - Example: "MPC for Autonomous Vehicles Review"

- **Research Question**: Specific, focused question
  - Example: "What are the current state-of-the-art Model Predictive Control approaches for autonomous vehicle trajectory planning?"

**Optional Fields:**
- **Researcher**: Your name
- **Institution**: Your organization
- **Sub-Questions**: Additional questions to explore
- **Description**: Brief project description

**Tips:**
- Be specific in your research question
- Use PICO format if applicable (Population, Intervention, Comparison, Outcome)
- Break complex questions into sub-questions

---

### Step 2: Keywords & Search Terms

**Primary Keywords** (Required):
```
model predictive control
MPC
autonomous vehicle
self-driving car
```
- Must include ALL of these terms
- Use phrases, not single words
- Include acronyms and full forms

**Secondary Keywords**:
```
trajectory planning
path planning
motion control
vehicle control
```
- Should include SOME of these
- Add related terms to broaden search

**Optional Keywords**:
```
receding horizon
optimal control
ADAS
```
- Nice to have, but not essential

**Boolean Search String** (Advanced):
```
("model predictive control" OR "MPC") AND
("autonomous vehicle" OR "self-driving") AND
("trajectory planning" OR "motion control")
```

**Databases Selection:**
Select which databases to search:
- ✅ Google Scholar (recommended)
- ✅ IEEE Xplore (for engineering)
- ✅ ScienceDirect (for science)
- ✅ arXiv (for recent preprints)
- etc.

---

### Step 3: Filters & Scope

**Year Range:**
- **Start Year**: Earliest publication year (e.g., 2020)
- **End Year**: Latest year (e.g., 2025)

**Citation Thresholds:**
- **Minimum Citations**: For older papers (e.g., 10)
- **Min Citations (Recent)**: For papers < 2 years old (e.g., 5)
  - Recent papers haven't had time to accumulate citations

**Paper Count:**
- **Target Papers**: Goal number (e.g., 40)
- **Maximum Papers**: Upper limit (e.g., 60)

**Options:**
- ✅ **Prioritize Recent Papers**: Give weight to newer research
- ✅ **Include Foundational Papers**: Include highly-cited older papers

**Preferred Venues** (Optional):
```
IEEE Transactions on Intelligent Transportation Systems
Automatica
IEEE/RSJ IROS
```

---

### Step 4: Inclusion & Exclusion Criteria

**Inclusion Criteria** (Papers MUST meet ALL):
```
✓ Peer-reviewed publication
✓ English language
✓ Full-text available
✓ Contains experimental validation or simulation
```

**Exclusion Criteria** (Exclude if ANY apply):
```
✗ Non-English papers
✗ No quantitative results
✗ Purely theoretical without application
✗ Review papers
✗ Patents or grey literature
```

**Thematic Categories** (Optional):
```
Algorithm design
Real-time implementation
Experimental validation
Safety considerations
```

**Technical Details to Extract** (Optional):
```
Algorithm complexity
Computation time
Hardware platform
Dataset used
Performance metrics
```

---

### Step 5: Output Preferences

**Output Formats:**
- ✅ Markdown (recommended)
- ✅ BibTeX (for citations)
- ☐ CSV (for spreadsheets)
- ☐ JSON (for programmatic use)

**Citation Style:**
- IEEE (default for engineering)
- APA (social sciences)
- Chicago (humanities)
- Harvard (business)

**Visualizations:**
- ✅ Timeline of publications
- ✅ Keyword frequency analysis
- ☐ Citation network diagram
- ☐ Methodology distribution

**Cross-Reference:**
- ✅ Cross-reference with existing knowledge base
  - Connects new findings with `theory_and_references/`

---

## Working with Claude Code

### Method 1: Generate and Copy Prompt (Recommended)

This is the easiest method for most users.

**Steps:**

1. **Configure your review** using the web interface
2. **Click "Generate Prompt"**
3. **Copy the generated prompt** from the popup
4. **Open Claude Code CLI:**
   ```bash
   claude
   ```
5. **Paste the prompt** and press Enter
6. **Claude will:**
   - Search for relevant papers
   - Screen them based on your criteria
   - Extract key information
   - Generate all output files
   - Save results to `outputs/` directory

**Example Interaction:**
```
You: [Paste the generated prompt here]

Claude: I'll conduct a systematic literature review based on your parameters.
Let me start by searching for papers on Model Predictive Control
for autonomous vehicles...

[Claude performs the review]

Claude: I've completed the review. Generated outputs:
- outputs/summaries/literature_review_summary.md
- outputs/tables/papers_comparison.md
- outputs/detailed_notes/paper_001_Smith_2024.md
- ... [more files]
- outputs/bibliography/references.bib
```

---

### Method 2: Save Configuration and Use Later

**Steps:**

1. **Configure and save** your parameters:
   - Click "Save Configuration"
   - Creates `config.yaml` file

2. **Later, when ready to review:**
   - Click "Load Config" to restore parameters
   - Click "Generate Prompt"
   - Use with Claude Code as in Method 1

**Benefits:**
- Save multiple configurations
- Refine parameters over time
- Share configurations with team

---

### Method 3: Direct API Integration (Advanced)

Requires Anthropic API key.

**Setup:**

1. **Get API key** from https://console.anthropic.com/
2. **Set environment variable:**
   ```bash
   # Windows
   set ANTHROPIC_API_KEY=your_key_here

   # Linux/Mac
   export ANTHROPIC_API_KEY=your_key_here
   ```
3. **Restart the web app**

**Usage:**

1. Configure your review
2. Click **"Start Review"**
3. Web app communicates directly with Claude API
4. Results appear in `outputs/` directory

**Benefits:**
- Fully automated
- No copy-paste needed
- Progress tracking (if implemented)

---

## Viewing and Managing Outputs

### Viewing Outputs

**Click "View Outputs"** button to see all generated files.

**Categories:**

1. **Summaries** 📄
   - Main literature review summary
   - Key findings and gaps
   - Research recommendations

2. **Comparison Tables** 📊
   - Side-by-side paper comparison
   - Methodologies and results
   - Quick reference guide

3. **Detailed Notes** 📝
   - Individual paper analyses
   - One file per paper
   - Format: `paper_001_Author_Year.md`

4. **Bibliography** 📚
   - BibTeX references
   - Formatted citations
   - Ready for LaTeX/Zotero

5. **Visualizations** 📈
   - Timeline charts
   - Keyword clouds
   - Citation networks

**Actions:**
- **View**: Preview file in browser
- **Download**: Save to your computer
- **Copy**: Copy content to clipboard

---

### Managing Outputs

**Organizing Files:**

```
outputs/
├── summaries/
│   └── literature_review_summary.md
├── tables/
│   └── papers_comparison.md
├── detailed_notes/
│   ├── paper_001_Smith_2024.md
│   ├── paper_002_Jones_2023.md
│   └── ...
├── bibliography/
│   └── references.bib
└── visualizations/
    ├── timeline.png
    └── keywords.png
```

**Best Practices:**
- Review outputs regularly
- Verify AI-generated content
- Merge multiple review sessions
- Back up important findings

---

## Advanced Usage

### Iterative Reviews

**Scenario**: You want to expand your review over time.

**Workflow:**

1. **Initial Review** (Broad):
   - Start Year: 2020
   - Target Papers: 30
   - Broad keywords

2. **Analyze Results**:
   - Identify gaps
   - Note new keywords
   - Find sub-topics

3. **Follow-up Review** (Focused):
   - Update keywords with findings
   - Narrow year range
   - Target Papers: 20 more
   - Focus on specific gaps

4. **Merge Results**:
   - Combine outputs manually
   - Update comparison table
   - Refine bibliography

---

### Collaborative Reviews

**Scenario**: Multiple researchers working together.

**Workflow:**

1. **Share Configuration**:
   - Save `config.yaml`
   - Share via Git or email
   - Team loads same parameters

2. **Divide and Conquer**:
   - Person A: Reviews papers 1-20
   - Person B: Reviews papers 21-40
   - Each generates detailed notes

3. **Merge Outputs**:
   - Combine all `detailed_notes/`
   - Create unified comparison table
   - Synthesize findings

---

### Custom Prompts

**Scenario**: You want to customize the generated prompt.

**Workflow:**

1. **Generate base prompt** from web app
2. **Copy and edit** the prompt:
   ```markdown
   # Add custom instructions
   Please pay special attention to:
   - Real-world deployment challenges
   - Computational efficiency comparisons
   - Safety guarantees and certification
   ```
3. **Use modified prompt** with Claude Code

---

### Integration with Existing Knowledge

**Scenario**: You have existing research notes to build upon.

**Setup:**

1. **Add your notes** to `theory_and_references/`:
   ```
   theory_and_references/
   ├── mathematic_model.md
   ├── references.md
   └── existing_review.md
   ```

2. **Enable cross-referencing**:
   - In Output tab: ✅ Cross-Reference with Existing Knowledge Base

3. **Claude will**:
   - Read your existing notes
   - Connect new findings to existing knowledge
   - Extend your mathematical models
   - Build upon previous references

---

## Troubleshooting

### Issue: "No papers found"

**Possible causes:**
- Keywords too specific
- Year range too narrow
- Citation threshold too high

**Solutions:**
1. Broaden keywords
2. Expand year range
3. Lower citation threshold
4. Check database selection

---

### Issue: "Too many papers returned"

**Solutions:**
1. Add more specific keywords
2. Narrow year range
3. Increase citation threshold
4. Add more exclusion criteria
5. Set stricter max_papers limit

---

### Issue: "Generated outputs are incomplete"

**Possible causes:**
- Claude hit token limit
- Complex request
- Connection interrupted

**Solutions:**
1. Reduce target paper count
2. Break into multiple smaller reviews
3. Simplify technical details extraction
4. Run review again with same config

---

### Issue: "Can't access web app"

**Solutions:**

1. **Check if app is running**:
   ```bash
   # Should see: "Running on http://127.0.0.1:5000"
   ```

2. **Port conflict**:
   ```python
   # Edit app.py, change port:
   app.run(debug=True, port=8080)
   ```

3. **Firewall blocking**:
   - Allow Python in firewall
   - Or use `localhost` instead of `0.0.0.0`

---

### Issue: "Outputs not appearing"

**Solutions:**

1. **Check outputs directory exists**:
   ```bash
   ls outputs/
   ```

2. **Verify file permissions**:
   ```bash
   # Make sure app can write to outputs/
   chmod -R 755 outputs/
   ```

3. **Check Claude's working directory**:
   - Claude should be in project root
   - Verify with `pwd` command

---

## Tips for Best Results

### Search Strategy

1. **Start Broad, Then Narrow**:
   - First pass: General keywords, many papers
   - Second pass: Specific terms, focused review

2. **Use Synonyms**:
   - Different communities use different terms
   - Include all variations

3. **Balance Quality and Quantity**:
   - Too strict: Miss important papers
   - Too loose: Overwhelmed with results

### Working with Claude

1. **Be Specific**: Clear research questions get better results
2. **Iterate**: Refine parameters based on initial results
3. **Verify**: Always cross-check important claims
4. **Document**: Save configurations for reproducibility

### Output Management

1. **Regular Backups**: Copy outputs folder periodically
2. **Version Control**: Use Git for configuration files
3. **Naming Conventions**: Keep organized file names
4. **Merge Carefully**: When combining multiple reviews

---

## Next Steps

After completing your literature review:

1. **Analyze Outputs**:
   - Read the generated summary
   - Review comparison table
   - Check for gaps and opportunities

2. **Refine and Iterate**:
   - Adjust parameters if needed
   - Run additional focused searches
   - Expand on interesting sub-topics

3. **Write Your Review**:
   - Use outputs as foundation
   - Add your own analysis
   - Cite papers properly

4. **Share and Collaborate**:
   - Share configuration with colleagues
   - Compare findings
   - Build consensus

---

## Support and Resources

- **Setup Guide**: See `WEB_APP_SETUP.md`
- **Documentation**: See `docs/` folder
- **Examples**: Check `config.example.yaml`
- **Issues**: Report bugs on GitHub

---

**Happy Researching!** 🎓

*Last Updated: October 2025*
