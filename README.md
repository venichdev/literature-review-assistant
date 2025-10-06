# Literature Review Assistant Template

A comprehensive template for conducting systematic literature reviews using AI assistance. This template helps researchers organize, analyze, and synthesize academic papers efficiently.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [Output Files](#output-files)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This template provides a structured workflow for conducting literature reviews with AI assistance. It includes:

- Systematic search and collection of academic papers
- Structured analysis and documentation
- Automated synthesis and gap analysis
- Multiple output formats (Markdown, BibTeX, CSV)
- Integration with existing knowledge bases

## ✨ Features

- **Systematic Search**: Query multiple academic databases with custom parameters
- **Structured Analysis**: Extract key information from papers automatically
- **Synthesis Tools**: Generate comparison tables, thematic analysis, and gap identification
- **Citation Management**: Export in BibTeX, IEEE, and other formats
- **Visualization**: Timeline charts, keyword analysis, and citation networks
- **Knowledge Integration**: Build upon existing research notes and formulas

## 🚀 Getting Started

### Prerequisites

- AI assistant with web search capabilities (Claude, GPT-4, etc.)
- Text editor or Markdown viewer
- (Optional) Reference management software (Zotero, Mendeley, etc.)

### Quick Start

1. **Clone or Download** this template
   ```bash
   git clone https://github.com/venichdev/literature-review-assistant.git
   cd literature-review-assistant
   ```

2. **Configure Your Search**
   - Copy `config.example.yaml` to `config.yaml`
   - Edit search parameters in `config.yaml`

3. **Start Your Review**
   - Provide your AI assistant with the instructions in `docs/INSTRUCTIONS.md`
   - Define your search criteria using `parameters_topics.md`

4. **Collect Results**
   - AI will generate structured outputs in the designated folders
   - Review and refine results iteratively

## 📁 Directory Structure

```
literature-review-template/
│
├── README.md                          # Main documentation
├── LICENSE                            # MIT License
├── .gitignore                         # Git exclusions
│
├── parameters_topics.md               # Search parameter template (USER FILLS THIS)
├── config.example.yaml                # Configuration example (copy to config.yaml)
│
├── .github/                           # GitHub-specific files
│   ├── CONTRIBUTING.md               # Contribution guidelines
│   └── ISSUE_TEMPLATE/               # Issue templates
│
├── docs/                              # Documentation
│   ├── README.md                     # Documentation index
│   ├── QUICK_START.md                # 5-minute quick start
│   ├── INSTRUCTIONS.md               # AI assistant instructions
│   └── CHANGELOG.md                  # Version history
│
├── templates/                         # Output templates (examples)
│   ├── paper_note_template.md
│   ├── summary_template.md
│   └── table_template.md
│
├── theory_and_references/             # Your knowledge base (optional)
│   ├── README.md
│   ├── mathematic_model.example.md
│   └── references.example.md
│
└── outputs/                           # Generated outputs (git-ignored)
    ├── detailed_notes/
    └── visualizations/
```

## 💡 Usage

### Basic Workflow

1. **Define Research Question**
   ```
   "What are the current MPC approaches for autonomous vehicles?"
   ```

2. **Set Search Parameters** (in `parameters_topics.md`)
   - Keywords
   - Year range
   - Citation threshold
   - Number of papers

3. **Run Literature Review**
   - Share instructions with AI assistant
   - AI searches, analyzes, and synthesizes papers
   - Review generated outputs

4. **Iterate and Refine**
   - Add more papers
   - Update filters
   - Regenerate summaries

### Example Commands

```bash
# Start new review
"Start literature review on: Model Predictive Control for Autonomous Vehicles"

# Add specific paper
"Add paper with DOI: 10.1109/example.2024"

# Filter results
"Show only papers from IEEE journals published after 2022"

# Generate outputs
"Create comparison table"
"Generate gap analysis"
"Export bibliography in BibTeX format"

# Update review
"Add 10 more recent papers"
"Update with papers citing [Author] 2023"
```

## ⚙️ Configuration

### config.yaml Structure

```yaml
project_name: "Your Research Topic"
research_question: "Your specific research question"

keywords:
  - "keyword 1"
  - "keyword 2"
  - "keyword 3"

year_range:
  start: 2020
  end: 2025

min_citations: 10
target_papers: 40

databases:
  - "IEEE Xplore"
  - "ScienceDirect"
  - "Google Scholar"
  - "arXiv"

exclusion_criteria:
  - "non-English papers"
  - "papers without experimental validation"

output_format:
  - "markdown"
  - "bibtex"
  - "csv"
```

### Search Parameters

Edit `parameters_topics.md` with:

1. **Research Topic/Question**: Clear, focused question
2. **Keywords**: 5-10 relevant search terms
3. **Year Range**: Publication timeframe
4. **Citation Threshold**: Minimum citations (quality filter)
5. **Target Count**: Number of papers to review
6. **Inclusion/Exclusion Criteria**: Specific requirements

## 📄 Output Files

The template generates the following outputs:

### 1. Literature Review Summary
- Research question and methodology
- Key findings synthesis
- Research gaps identified
- Future research recommendations

### 2. Papers Comparison Table
| Authors | Year | Title | Methodology | Key Findings | Limitations | Citations |
|---------|------|-------|-------------|--------------|-------------|-----------|

### 3. Detailed Notes
Individual files for each paper:
- `paper_001_Smith_2024.md`
- `paper_002_Jones_2023.md`
- etc.

### 4. Bibliography
- BibTeX format (`.bib`)
- IEEE/APA format (`.md`)

### 5. Visualizations
- Timeline of publications
- Keyword frequency analysis
- Citation network diagrams

## 📚 Best Practices

### For Effective Literature Reviews

1. ✅ **Start Broad, Then Narrow**: Begin with general keywords, refine based on results
2. ✅ **Document Everything**: Record all search parameters and decisions
3. ✅ **Use Inclusion/Exclusion Criteria**: Be systematic and transparent
4. ✅ **Verify Citations**: Cross-check important claims with original papers
5. ✅ **Iterate**: Review multiple times, add relevant papers as you discover them
6. ✅ **Synthesize, Don't Summarize**: Find patterns, gaps, and connections

### Working with AI Assistant

- Provide clear, specific instructions
- Review AI-generated summaries for accuracy
- Use AI for initial screening, manual review for final decisions
- Combine AI efficiency with human critical thinking

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Report bugs or issues
- Suggest new features
- Submit pull requests
- Share your use cases

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

## 📄 License

This template is available under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Built for researchers conducting systematic literature reviews
- Optimized for AI-assisted academic research
- Compatible with Claude, GPT-4, and other AI assistants

## 📞 Support

- **Quick Start**: See [docs/QUICK_START.md](docs/QUICK_START.md)
- **Full Documentation**: See [docs/](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/venichdev/literature-review-assistant/issues)
- **Discussions**: [GitHub Discussions](https://github.com/venichdev/literature-review-assistant/discussions)

---

**Happy Researching!** 🎓

*Last Updated: October 2025*
