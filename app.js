document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const createButton = document.getElementById('submit-btn');
    const clearButton = document.getElementById('clear-btn');
    const promptInput = document.getElementById('ai-prompt');
    const messageDisplay = document.createElement('p'); 

    
    document.querySelector('.input-container').appendChild(messageDisplay);

    createButton.addEventListener('click', function() {
        const userPrompt = promptInput.value.trim();
        if (userPrompt) {
            // TODO: Handle the user prompt (send to server, AI processing, etc.)
            displayMessage('Your design is being created...', 'success');
        } else {
            displayMessage('Please enter a prompt to create your design.', 'error');
        }
    });

    clearButton.addEventListener('click', function() {
        promptInput.value = '';
        messageDisplay.textContent = ''; // Clear any displayed messages
    });


    function displayMessage(message, type) {
        messageDisplay.textContent = message;
        messageDisplay.className = type; 
    }

    
    highlightActivePage();
    function highlightActivePage() {
        // Get the current URL path
        const currentPath = window.location.pathname;

        // Get the file name (e.g., 'index.html', 'about.html')
        const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            // Check if the link's href attribute ends with the current page's file name
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    async function fetchUserTokens() {
        try {
            const response = await fetch('/api/user-tokens');
            const data = await response.json();
            document.getElementById('token-count').textContent = data.tokens;
        } catch (error) {
            console.error('Error fetching user tokens:', error);
            document.getElementById('token-count').textContent = 'Error';
        }
    }
    
    fetchUserTokens();
    
    
});
