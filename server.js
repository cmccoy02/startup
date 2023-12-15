const express = require('express');
const path = require('path');
const app = express();

// Set the port from an environment variable, or default to 3000
const port = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Optional: Simple request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define API routes
app.post('/api/login', (req, res) => {
    // Handle user login
    res.json({ success: true, message: 'Login functionality to be implemented' });
});

app.get('/api/userdata', (req, res) => {
    // Handle fetching user data
    res.json({ success: true, message: 'User data functionality to be implemented' });
});

app.get('/api/externaldata', (req, res) => {
    // Handle external API call
    res.json({ success: true, message: 'External API call functionality to be implemented' });
});

// 404 Not Found handler
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
