// Literature Review Assistant - Frontend JavaScript

// Tab Management
function showTab(tabName) {
    // Hide all tabs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');

    // Add active class to clicked button
    event.target.closest('.tab-btn').classList.add('active');
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Modal Management
function closeModal() {
    document.getElementById('outputModal').style.display = 'none';
}

function closeOutputsList() {
    document.getElementById('outputsListModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const outputModal = document.getElementById('outputModal');
    const outputsListModal = document.getElementById('outputsListModal');

    if (event.target === outputModal) {
        closeModal();
    }
    if (event.target === outputsListModal) {
        closeOutputsList();
    }
}

// Copy to Clipboard
function copyToClipboard() {
    const content = document.getElementById('modalContent').textContent;
    navigator.clipboard.writeText(content).then(() => {
        showToast('Copied to clipboard!', 'success');
    }).catch(err => {
        showToast('Failed to copy', 'error');
    });
}

// Get Form Data as JSON
function getFormData() {
    const form = document.getElementById('reviewForm');
    const data = {
        project_name: form.project_name.value,
        researcher: form.researcher.value,
        institution: form.institution.value,
        description: form.description.value,
        research_question: form.research_question.value,
        date_started: new Date().toISOString().split('T')[0]
    };

    // Sub-questions
    const subQuestions = form.sub_questions.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (subQuestions.length > 0) {
        data.sub_questions = subQuestions;
    }

    // Keywords
    data.keywords = {
        primary: form.primary_keywords.value.split('\n').map(s => s.trim()).filter(s => s),
        secondary: form.secondary_keywords.value.split('\n').map(s => s.trim()).filter(s => s),
        optional: form.optional_keywords.value.split('\n').map(s => s.trim()).filter(s => s)
    };

    // Search string
    if (form.search_string.value) {
        data.search_string = form.search_string.value;
    }

    // Databases
    const databases = [];
    if (form.db_google_scholar.checked) databases.push('Google Scholar');
    if (form.db_ieee.checked) databases.push('IEEE Xplore');
    if (form.db_sciencedirect.checked) databases.push('ScienceDirect');
    if (form.db_springer.checked) databases.push('SpringerLink');
    if (form.db_arxiv.checked) databases.push('arXiv');
    if (form.db_acm.checked) databases.push('ACM Digital Library');
    if (form.db_scopus.checked) databases.push('Scopus');
    if (form.db_wos.checked) databases.push('Web of Science');
    data.databases = databases;

    // Year range
    data.year_range = {
        start: parseInt(form.year_start.value),
        end: parseInt(form.year_end.value)
    };

    // Citations
    data.min_citations = parseInt(form.min_citations.value);
    data.min_citations_recent = parseInt(form.min_citations_recent.value);

    // Target papers
    data.target_papers = parseInt(form.target_papers.value);
    data.max_papers = parseInt(form.max_papers.value);

    // Flags
    data.prioritize_recent = form.prioritize_recent.checked;
    data.include_foundational = form.include_foundational.checked;

    // Preferred venues
    const venues = form.preferred_venues.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (venues.length > 0) {
        data.preferred_venues = venues;
    }

    // Inclusion criteria
    data.inclusion_criteria = form.inclusion_criteria.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    // Exclusion criteria
    data.exclusion_criteria = form.exclusion_criteria.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    // Thematic categories
    const themes = form.thematic_categories.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (themes.length > 0) {
        data.thematic_categories = themes;
    }

    // Technical details
    const techDetails = form.technical_details.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (techDetails.length > 0) {
        data.technical_details = techDetails;
    }

    // Output formats
    const outputFormats = [];
    if (form.output_markdown.checked) outputFormats.push('markdown');
    if (form.output_bibtex.checked) outputFormats.push('bibtex');
    if (form.output_csv.checked) outputFormats.push('csv');
    if (form.output_json.checked) outputFormats.push('json');
    data.output_format = outputFormats;

    // Citation style
    data.citation_style = form.citation_style.value;

    // Visualizations
    data.generate_visualizations = form.generate_visualizations.checked;
    if (data.generate_visualizations) {
        const vizTypes = [];
        if (form.viz_timeline.checked) vizTypes.push('timeline');
        if (form.viz_keywords.checked) vizTypes.push('keyword_frequency');
        if (form.viz_citation.checked) vizTypes.push('citation_network');
        if (form.viz_methodology.checked) vizTypes.push('methodology_distribution');
        data.visualization_types = vizTypes;
    }

    // Cross reference
    data.cross_reference = form.cross_reference.checked;

    // Output directories
    data.output_directory = './outputs';
    data.subdirectories = {
        summaries: './outputs/summaries',
        tables: './outputs/tables',
        detailed_notes: './outputs/detailed_notes',
        bibliography: './outputs/bibliography',
        visualizations: './outputs/visualizations'
    };

    // Knowledge base
    data.knowledge_base = {
        enabled: form.cross_reference.checked,
        directory: './theory_and_references',
        files: ['mathematic_model.md', 'references.md']
    };

    return data;
}

// Set Form Data from JSON
function setFormData(data) {
    const form = document.getElementById('reviewForm');

    form.project_name.value = data.project_name || '';
    form.researcher.value = data.researcher || '';
    form.institution.value = data.institution || '';
    form.description.value = data.description || '';
    form.research_question.value = data.research_question || '';

    // Sub-questions
    if (data.sub_questions) {
        form.sub_questions.value = data.sub_questions.join('\n');
    }

    // Keywords
    if (data.keywords) {
        if (data.keywords.primary) {
            form.primary_keywords.value = data.keywords.primary.join('\n');
        }
        if (data.keywords.secondary) {
            form.secondary_keywords.value = data.keywords.secondary.join('\n');
        }
        if (data.keywords.optional) {
            form.optional_keywords.value = data.keywords.optional.join('\n');
        }
    }

    // Search string
    form.search_string.value = data.search_string || '';

    // Databases
    if (data.databases) {
        form.db_google_scholar.checked = data.databases.includes('Google Scholar');
        form.db_ieee.checked = data.databases.includes('IEEE Xplore');
        form.db_sciencedirect.checked = data.databases.includes('ScienceDirect');
        form.db_springer.checked = data.databases.includes('SpringerLink');
        form.db_arxiv.checked = data.databases.includes('arXiv');
        form.db_acm.checked = data.databases.includes('ACM Digital Library');
        form.db_scopus.checked = data.databases.includes('Scopus');
        form.db_wos.checked = data.databases.includes('Web of Science');
    }

    // Year range
    if (data.year_range) {
        form.year_start.value = data.year_range.start || 2020;
        form.year_end.value = data.year_range.end || 2025;
    }

    // Citations
    form.min_citations.value = data.min_citations || 10;
    form.min_citations_recent.value = data.min_citations_recent || 5;

    // Papers
    form.target_papers.value = data.target_papers || 40;
    form.max_papers.value = data.max_papers || 60;

    // Flags
    form.prioritize_recent.checked = data.prioritize_recent !== false;
    form.include_foundational.checked = data.include_foundational !== false;

    // Preferred venues
    if (data.preferred_venues) {
        form.preferred_venues.value = data.preferred_venues.join('\n');
    }

    // Inclusion criteria
    if (data.inclusion_criteria) {
        form.inclusion_criteria.value = data.inclusion_criteria.join('\n');
    }

    // Exclusion criteria
    if (data.exclusion_criteria) {
        form.exclusion_criteria.value = data.exclusion_criteria.join('\n');
    }

    // Thematic categories
    if (data.thematic_categories) {
        form.thematic_categories.value = data.thematic_categories.join('\n');
    }

    // Technical details
    if (data.technical_details) {
        form.technical_details.value = data.technical_details.join('\n');
    }

    // Output formats
    if (data.output_format) {
        form.output_markdown.checked = data.output_format.includes('markdown');
        form.output_bibtex.checked = data.output_format.includes('bibtex');
        form.output_csv.checked = data.output_format.includes('csv');
        form.output_json.checked = data.output_format.includes('json');
    }

    // Citation style
    form.citation_style.value = data.citation_style || 'IEEE';

    // Visualizations
    form.generate_visualizations.checked = data.generate_visualizations !== false;
    if (data.visualization_types) {
        form.viz_timeline.checked = data.visualization_types.includes('timeline');
        form.viz_keywords.checked = data.visualization_types.includes('keyword_frequency');
        form.viz_citation.checked = data.visualization_types.includes('citation_network');
        form.viz_methodology.checked = data.visualization_types.includes('methodology_distribution');
    }

    // Cross reference
    form.cross_reference.checked = data.cross_reference !== false;
}

// Load Configuration
async function loadConfig() {
    try {
        const response = await fetch('/api/config/load');
        const result = await response.json();

        if (result.success) {
            setFormData(result.config);
            showToast('Configuration loaded successfully', 'success');
        } else {
            showToast('Error loading configuration: ' + result.error, 'error');
        }
    } catch (error) {
        showToast('Error: ' + error.message, 'error');
    }
}

// Save Configuration
async function saveConfig() {
    try {
        const data = getFormData();

        const response = await fetch('/api/config/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showToast('Configuration saved successfully', 'success');
        } else {
            showToast('Error saving configuration: ' + result.error, 'error');
        }
    } catch (error) {
        showToast('Error: ' + error.message, 'error');
    }
}

// Generate Prompt
async function generatePrompt() {
    try {
        const data = getFormData();

        const response = await fetch('/api/review/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // Show prompt in modal
            document.getElementById('modalTitle').textContent = 'Generated Prompt for Claude';
            document.getElementById('modalContent').textContent = result.prompt;
            document.getElementById('outputModal').style.display = 'block';
            showToast('Prompt generated successfully', 'success');
        } else {
            showToast('Error generating prompt: ' + result.error, 'error');
        }
    } catch (error) {
        showToast('Error: ' + error.message, 'error');
    }
}

// Start Review
async function startReview() {
    if (!confirm('This will initiate the literature review process. Continue?')) {
        return;
    }

    try {
        const data = getFormData();

        const response = await fetch('/api/review/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // Show prompt in modal with instructions
            const instructions = `LITERATURE REVIEW INITIATED\n\n` +
                `Use this prompt with Claude Code or Claude API:\n\n` +
                `${'-'.repeat(60)}\n\n${result.prompt}\n\n${'-'.repeat(60)}\n\n` +
                `Note: ${result.note}`;

            document.getElementById('modalTitle').textContent = 'Review Task Started';
            document.getElementById('modalContent').textContent = instructions;
            document.getElementById('outputModal').style.display = 'block';
            showToast('Review task initiated successfully', 'success');
        } else {
            showToast('Error: ' + result.error, 'error');
        }
    } catch (error) {
        showToast('Error: ' + error.message, 'error');
    }
}

// View Outputs
async function viewOutputs() {
    try {
        const response = await fetch('/api/outputs/list');
        const result = await response.json();

        if (result.success) {
            displayOutputsList(result.outputs);
            document.getElementById('outputsListModal').style.display = 'block';
        } else {
            showToast('Error loading outputs: ' + result.error, 'error');
        }
    } catch (error) {
        showToast('Error: ' + error.message, 'error');
    }
}

// Display Outputs List
function displayOutputsList(outputs) {
    const container = document.getElementById('outputsList');
    container.innerHTML = '';

    const categories = {
        summaries: { name: 'Summaries', icon: 'fa-file-alt' },
        tables: { name: 'Comparison Tables', icon: 'fa-table' },
        detailed_notes: { name: 'Detailed Notes', icon: 'fa-sticky-note' },
        bibliography: { name: 'Bibliography', icon: 'fa-book' },
        visualizations: { name: 'Visualizations', icon: 'fa-chart-bar' }
    };

    for (const [key, category] of Object.entries(categories)) {
        const files = outputs[key] || [];

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'outputs-category';

        const header = document.createElement('h3');
        header.innerHTML = `<i class="fas ${category.icon}"></i> ${category.name} (${files.length})`;
        categoryDiv.appendChild(header);

        if (files.length === 0) {
            const emptyMsg = document.createElement('p');
            emptyMsg.textContent = 'No files generated yet';
            emptyMsg.style.color = 'var(--text-secondary)';
            categoryDiv.appendChild(emptyMsg);
        } else {
            const listDiv = document.createElement('div');
            listDiv.className = 'outputs-list';

            files.forEach(file => {
                const item = document.createElement('div');
                item.className = 'output-item';

                const info = document.createElement('div');
                info.className = 'output-info';

                const name = document.createElement('div');
                name.className = 'output-name';
                name.textContent = file.name;
                info.appendChild(name);

                const meta = document.createElement('div');
                meta.className = 'output-meta';
                const fileSize = (file.size / 1024).toFixed(2);
                const modDate = new Date(file.modified).toLocaleString();
                meta.textContent = `${fileSize} KB • Modified: ${modDate}`;
                info.appendChild(meta);

                item.appendChild(info);

                const actions = document.createElement('div');
                actions.className = 'output-actions';

                const viewBtn = document.createElement('button');
                viewBtn.className = 'btn btn-primary';
                viewBtn.innerHTML = '<i class="fas fa-eye"></i> View';
                viewBtn.onclick = () => viewOutputFile(key, file.name);
                actions.appendChild(viewBtn);

                const downloadBtn = document.createElement('button');
                downloadBtn.className = 'btn btn-secondary';
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';
                downloadBtn.onclick = () => downloadOutputFile(key, file.name);
                actions.appendChild(downloadBtn);

                item.appendChild(actions);
                listDiv.appendChild(item);
            });

            categoryDiv.appendChild(listDiv);
        }

        container.appendChild(categoryDiv);
    }
}

// View Output File
async function viewOutputFile(category, filename) {
    try {
        const response = await fetch(`/api/outputs/view/${category}/${filename}`);
        const result = await response.json();

        if (result.success) {
            document.getElementById('modalTitle').textContent = filename;
            document.getElementById('modalContent').textContent = result.content;
            closeOutputsList();
            document.getElementById('outputModal').style.display = 'block';
        } else {
            showToast('Error viewing file: ' + result.error, 'error');
        }
    } catch (error) {
        showToast('Error: ' + error.message, 'error');
    }
}

// Download Output File
function downloadOutputFile(category, filename) {
    window.location.href = `/api/outputs/download/${category}/${filename}`;
}

// Reset Form
function resetForm() {
    if (confirm('Are you sure you want to reset the form?')) {
        document.getElementById('reviewForm').reset();
        showToast('Form reset', 'success');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Try to load existing config
    loadConfig();

    // Set current year as default end year
    const currentYear = new Date().getFullYear();
    document.getElementById('year_end').value = currentYear;
});
