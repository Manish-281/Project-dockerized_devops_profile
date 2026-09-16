// Fetch data from endpoint
async function fetchData(endpoint) {
    const title = document.getElementById('output-title');
    const content = document.getElementById('output-content');

    // Show loading
    title.textContent = `GET ${endpoint}`;
    content.textContent = 'Loading...';

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        // Check content type
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            content.textContent = JSON.stringify(data, null, 2);
        } else {
            const text = await response.text();
            content.textContent = text;
        }
    } catch (err) {
        content.textContent = `Error: ${err.message}`;
    }
}

// Close output
function closeOutput() {
    const title = document.getElementById('output-title');
    const content = document.getElementById('output-content');

    title.textContent = 'Terminal';
    content.textContent = 'Click an endpoint to see the response...';
}

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeOutput();
    }
});
