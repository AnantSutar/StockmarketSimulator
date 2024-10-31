// index.js

// Import necessary dependencies
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config(); // Load environment variables from .env file
const sequelize = require('./config/db');
// Initialize the Express application
const app = express();

// Middleware setup
app.use(helmet());            // Set security HTTP headers
app.use(cors());              // Enable CORS for all routes
app.use(bodyParser.json());   // Parse incoming JSON requests

// Set up database connection with Sequelize


// Define routes here
// Example: 
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/stocks', require('./routes/stockRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
