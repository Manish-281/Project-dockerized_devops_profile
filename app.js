const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Home
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Profile API 🚀',
        version: '1.0.0'
    });
});

// Profile
app.get('/profile', (req, res) => {
    res.json({
        name: 'Manish',
        role: 'DevOps Engineer',
        skills: ['Docker', 'AWS', 'Linux', 'CI/CD'],
        location: 'India'
    });
});

// Skills
app.get('/skills', (req, res) => {
    res.json({
        skills: [
            { name: 'Docker', level: 'Intermediate' },
            { name: 'AWS', level: 'Beginner' },
            { name: 'Linux', level: 'Intermediate' }
        ]
    });
});

// Health
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// Start
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
