# Quick Start Guide

Get started with your literature review in 5 minutes!

## 🚀 Step 1: Set Up Your Parameters

1. Open `parameters_topics.md`
2. Fill in your research question and keywords
3. Set year range and quality filters

**Example**:
```markdown
Research Question: "What are the current MPC approaches for autonomous vehicles?"
Keywords: model predictive control, autonomous vehicle, trajectory planning
Year Range: 2020-2025
Minimum Citations: 10
Target Papers: 40
```

## 🤖 Step 2: Share Instructions with AI

1. Open `INSTRUCTIONS.md`
2. Copy the content or share the file with your AI assistant (Claude, GPT-4, etc.)
3. Say: "Please conduct a literature review using these instructions and the parameters in parameters_topics.md"

## 📥 Step 3: Review Results

The AI will generate:
- `literature_review_summary.md` - Main findings and analysis
- `papers_table.md` - Comparison table
- `detailed_notes/` - Individual paper summaries
- `bibliography.bib` - BibTeX citations

## ✅ Step 4: Iterate

Refine your search:
- "Add 10 more recent papers"
- "Filter to only IEEE journals"
- "Focus on papers with real-world validation"

---

## 💡 Tips

### Using Existing Knowledge
If you have existing research notes:
1. Place them in `theory_and_references/`
2. Tell the AI: "Expand on the concepts in my knowledge base"

### Output Organization
Create output directory:
```bash
mkdir outputs
mkdir outputs/detailed_notes
```

### Configuration File (Optional)
For complex searches:
1. Copy `config.example.yaml` to `config.yaml`
2. Customize settings
3. Tell AI to use the config file

---

## 📊 Example Workflow

```
You: "Start literature review on: Model Predictive Control for Autonomous Vehicles"

AI: [Searches databases, finds 150 papers, filters to 40 most relevant]

AI: [Generates summary, table, and detailed notes]

You: "Add 5 more papers focused on real-time implementation"

AI: [Expands review with specific focus]

You: "Create a comparison of computational complexity across papers"

AI: [Generates specialized analysis]
```

---

## 🆘 Common Issues

**Too many results?**
- Narrow your keywords
- Increase citation threshold
- Reduce year range

**Too few results?**
- Broaden keywords
- Reduce filters
- Expand year range

**Missing information?**
- AI will note fields as "unavailable"
- May need manual paper review

---

## 📚 Next Steps

1. **Customize templates** in `templates/` folder
2. **Add your knowledge** to `theory_and_references/`
3. **Share your workflow** in CONTRIBUTING.md

---

**Ready to start? Open `parameters_topics.md` and define your search!**
