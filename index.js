const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 4000;

app.use(express.static('public'));

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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
