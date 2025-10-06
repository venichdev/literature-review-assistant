# Output Templates

This directory contains example templates for literature review outputs. These templates show you what the AI assistant will generate.

## 📄 Available Templates

### 1. paper_note_template.md
**Purpose**: Template for individual paper summaries and notes

**Use**: The AI will create one file per paper reviewed (e.g., `paper_001_Smith_2024.md`)

**Contains**:
- Bibliographic information
- Summary and key findings
- Methodology details
- Strengths and limitations
- Your notes and classifications

**Location in outputs**: `outputs/detailed_notes/`

---

### 2. summary_template.md
**Purpose**: Template for the overall literature review summary

**Use**: The AI creates one comprehensive summary document

**Contains**:
- Research question and methodology
- Summary of findings across all papers
- Thematic analysis
- Research gaps identified
- Future research recommendations

**Location in outputs**: `outputs/literature_review_summary.md`

---

### 3. table_template.md
**Purpose**: Template for comparison tables across all papers

**Use**: The AI creates structured tables for easy comparison

**Contains**:
- Full comparison table with all papers
- Thematic groupings
- Timeline view
- Citation analysis
- Technical specifications table

**Location in outputs**: `outputs/papers_table.md`

---

## 🎨 Customization

You can customize these templates to fit your needs:

1. **Copy** a template to your working directory
2. **Modify** the structure and fields
3. **Tell the AI** to use your custom template format

Example:
> "Use my custom template from `my_custom_template.md` for paper notes"

---

## 📋 Additional Output Files

Beyond these templates, the AI may also generate:

- **bibliography.bib** - BibTeX citations for all papers
- **CSV exports** - Table data in CSV format
- **Visualizations** - Charts and graphs (in `outputs/visualizations/`)

---

## 💡 Tips

### For Individual Papers
- Add custom fields relevant to your research
- Include domain-specific technical details
- Add sections for personal observations

### For Summary
- Adjust thematic categories to your field
- Add sections for specific analyses you need
- Include custom comparison dimensions

### For Tables
- Add columns for metrics specific to your domain
- Create specialized comparison views
- Organize by different categorization schemes

---

## 🔙 Back to Main

See main [README.md](../README.md) for full documentation.
