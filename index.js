const express = require('express');
const fetch = require('node-fetch');
const { connectDB, addUser, findUser } = require('./database.js');
const bcrypt = require('bcrypt');
const app = express();
const port = 4000;

app.use(express.json()); // To parse JSON request bodies
app.use(express.static('public'));

// Establish a connection to MongoDB
connectDB().catch(error => {
    console.error('Database connection failed', error);
    process.exit(1);
});

// Random number API endpoint
app.get('/api/user-tokens', async (req, res) => {
    try {
        const response = await fetch('https://csrng.net/csrng/csrng.php?min=10&max=100');
        const data = await response.json();
        const tokens = data[0].random;
        res.json({ tokens });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
        const existingUser = await findUser(username);
        if (existingUser) {
            return res.status(409).send('User already exists');
        }
        await addUser(username, password);
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
        const user = await findUser(username);
        if (user && await bcrypt.compare(password, user.password)) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
