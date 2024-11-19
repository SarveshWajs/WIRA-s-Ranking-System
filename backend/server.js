const express = require('express');
const cors = require('cors');
const scoresRoutes = require('./routes/scores'); // Import the scores routes

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Use the scores routes
app.use('/scores', scoresRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
