const express = require('express');
const app = express();

app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Feature 1: Homepage
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>DevOps App</title>
            </head>
            <body>
                <h1>🚀 DevOps Demo App Running Successfully</h1>
                <p>Your Docker container is working!</p>
                <a href="/tasks">View Tasks</a>
            </body>
        </html>
    `);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});