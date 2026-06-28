require('dotenv').config();

//Import express and cors
const express = require('express');
const cors = require('cors');

// Importar routes
const githubRoutes = require('./routes/githubRoutes');

// Create an instance of express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(cors());
app.use(express.json());

// link the routes
app.use('/api', githubRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
