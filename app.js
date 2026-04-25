const express = require('express');
const app = express();

app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Feature 1: Homepage
app.get('/', (req, res) => {
    res.send("DevOps Demo App Running Successfully");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});