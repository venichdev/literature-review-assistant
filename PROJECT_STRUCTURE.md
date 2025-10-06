# Project Structure

This document provides a complete overview of the Literature Review Template organization.

## 📁 Directory Tree

```
literature-review-template/
│
├── 📄 README.md                               # Main documentation & getting started
├── 📄 LICENSE                                 # MIT License
├── 📄 .gitignore                              # Git exclusions (PDFs, configs, outputs)
│
├── 📝 parameters_topics.md                    # ⭐ USER FILLS: Search parameters
├── ⚙️  config.example.yaml                    # Configuration template (copy to config.yaml)
│
├── .github/                                   # GitHub-specific files
│   ├── 📄 CONTRIBUTING.md                    # Contribution guidelines
│   ├── 📄 pull_request_template.md           # PR template
│   └── ISSUE_TEMPLATE/                       # Issue templates
│       ├── bug_report.md                     # Bug report template
│       ├── feature_request.md                # Feature request template
│       └── question.md                       # Question template
│
├── docs/                                      # 📚 Documentation
│   ├── 📄 README.md                          # Documentation index
│   ├── 📄 QUICK_START.md                     # 5-minute quick start guide
│   ├── 📄 INSTRUCTIONS.md                    # ⭐ AI assistant instructions (detailed)
│   └── 📄 CHANGELOG.md                       # Version history
│
├── templates/                                 # 📋 Output templates (examples)
│   ├── 📄 README.md                          # Templates documentation
│   ├── 📄 paper_note_template.md             # Individual paper note template
│   ├── 📄 summary_template.md                # Literature review summary template
│   └── 📄 table_template.md                  # Comparison table template
│
├── theory_and_references/                     # 🧠 Your knowledge base (optional)
│   ├── 📄 README.md                          # Knowledge base documentation
│   ├── 📄 mathematic_model.example.md        # Example: Math formulas & models
│   └── 📄 references.example.md              # Example: Reference database
│
└── outputs/                                   # 📤 Generated outputs (git-ignored)
    ├── .gitkeep                              # Keep directory in git
    ├── detailed_notes/                       # Individual paper notes
    │   └── .gitkeep
    └── visualizations/                       # Charts and graphs
        └── .gitkeep
```

---

## 🎯 Key Files for Users

### 1. Start Here (First Time)
1. **README.md** - Overview and setup
2. **docs/QUICK_START.md** - 5-minute guide
3. **parameters_topics.md** - Fill this with your search criteria
4. **docs/INSTRUCTIONS.md** - Give this to your AI assistant

### 2. Configuration (Optional)
- **config.example.yaml** → Copy to `config.yaml` and customize

### 3. Knowledge Base (Optional)
- **theory_and_references/** - Add your existing research notes here

---

## 📂 Directory Purposes

| Directory | Purpose | Git Tracked? |
|-----------|---------|--------------|
| `.github/` | GitHub configuration (issues, PRs, contributing) | ✅ Yes |
| `docs/` | Detailed documentation | ✅ Yes |
| `templates/` | Example output templates | ✅ Yes |
| `theory_and_references/` | User's knowledge base (optional) | ✅ Yes (examples only) |
| `outputs/` | Generated literature review outputs | ❌ No (git-ignored) |

---

## 🔄 Workflow Flow

```
1. USER fills out:
   └── parameters_topics.md (or config.yaml)

2. USER shares with AI:
   └── docs/INSTRUCTIONS.md

3. AI reads knowledge base (optional):
   └── theory_and_references/

4. AI generates outputs:
   ├── outputs/literature_review_summary.md
   ├── outputs/papers_table.md
   ├── outputs/bibliography.bib
   ├── outputs/detailed_notes/
   │   ├── paper_001_Smith_2024.md
   │   ├── paper_002_Jones_2023.md
   │   └── ...
   └── outputs/visualizations/
       ├── timeline.png
       └── keyword_analysis.png
```

---

## 📝 File Naming Conventions

### User Files
- `parameters_topics.md` - User-defined search parameters
- `config.yaml` - User configuration (created from config.example.yaml)

### Generated Files
- `literature_review_summary.md` - Main summary document
- `papers_table.md` - Comparison table
- `bibliography.bib` - BibTeX citations
- `paper_XXX_AuthorName_YYYY.md` - Individual paper notes

### Documentation
- `README.md` - Main documentation
- `INSTRUCTIONS.md` - AI instructions
- `CONTRIBUTING.md` - Contribution guide
- `CHANGELOG.md` - Version history
- `QUICK_START.md` - Quick start guide

---

## 🎨 Clean Organization Principles

### Root Level (Minimal)
- Only essential files visible at root
- Clear entry point (README.md)
- User action files (parameters_topics.md, config.example.yaml)

### Organized Subdirectories
- **.github/** - GitHub-specific (hidden from main view)
- **docs/** - All documentation in one place
- **templates/** - Example outputs
- **theory_and_references/** - User content
- **outputs/** - Generated content (ignored by git)

### Benefits
✅ Clean root directory
✅ Easy to navigate
✅ Clear separation of concerns
✅ GitHub best practices
✅ Professional appearance

---

## 🚀 Quick Reference

### I want to...

**Start a new literature review**
→ Read `docs/QUICK_START.md`

**Configure advanced settings**
→ Copy `config.example.yaml` to `config.yaml`

**Understand AI instructions**
→ Read `docs/INSTRUCTIONS.md`

**Contribute to the project**
→ Read `.github/CONTRIBUTING.md`

**Report a bug**
→ Use GitHub Issues with bug_report template

**See what's changed**
→ Check `docs/CHANGELOG.md`

**Customize output templates**
→ Edit files in `templates/`

**Add my existing research**
→ Add files to `theory_and_references/`

---

## 📊 Statistics

- **Total Directories**: 7
- **Total Template Files**: 3
- **Total Documentation Files**: 4
- **GitHub Templates**: 4
- **Root Level Files**: 4 (clean!)

---

**Last Updated**: 2025-10-06
**Version**: 1.0
