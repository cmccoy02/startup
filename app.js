document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const createButton = document.getElementById('submit-btn');
    const clearButton = document.getElementById('clear-btn');
    const promptInput = document.getElementById('ai-prompt');
    const messageDisplay = document.createElement('p'); // Element to display messages

    // Adding message display to the DOM
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
        messageDisplay.className = type; // Use this class for styling messages
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
    
});
