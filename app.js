const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// HTML page (home)
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Root - JSON welcome
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to DevOps Profile API 🚀',
        version: '1.0.0',
        author: 'Manish',
        endpoints: [
            '/profile',
            '/skills',
            '/health'
        ]
    });
});

// Profile
app.get('/profile', (req, res) => {
    res.json({
        name: 'Manish',
        role: 'Cloud/DevOps Engineer',
        location: 'India',
        skills: [
            'AWS',
            'Docker',
            'Kubernetes',
            'Jenkins',
            'CI/CD',
            'Linux',
            'Networking',
            'Git & GitHub'
        ]
    });
});

// Skills
app.get('/skills', (req, res) => {
    res.json({
        skills: [
            { name: 'AWS', level: 'Intermediate' },
            { name: 'Docker', level: 'Intermediate' },
            { name: 'Kubernetes', level: 'Beginner' },
            { name: 'Jenkins', level: 'Beginner' },
            { name: 'CI/CD', level: 'Intermediate' },
            { name: 'Linux', level: 'Intermediate' },
            { name: 'Networking', level: 'Intermediate' },
            { name: 'Git & GitHub', level: 'Intermediate' }
        ]
    });
});

// Health
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
