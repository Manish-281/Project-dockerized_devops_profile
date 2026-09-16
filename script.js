// Fetch data from endpoint
async function fetchData(endpoint) {
    const output = document.getElementById('output');
    const title = document.getElementById('output-title');
    const content = document.getElementById('output-content');

    // Show loading
    title.textContent = `GET ${endpoint}`;
    content.textContent = 'Loading...';
    output.classList.add('active');

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        content.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        content.textContent = `Error: ${err.message}`;
    }
}

// Close output
function closeOutput() {
    document.getElementById('output').classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeOutput();
    }
});
