// index.js

// Import necessary dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const helmet = require('helmet');
dotenv.config({ path: "./backend/.env" });// Load environment variables from .env file
const sequelize = require('./config/db');



const User = require('./models/userModel');
const Stock = require('./models/stocksModel')

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/authRoutes')
// Initialize the Express application
const app = express();

// Middleware setup
app.use(helmet());            // Set security HTTP headers
app.use(cors());              // Enable CORS for all routes
app.use(bodyParser.json());   // Parse incoming JSON requests

// Set up database connection with Sequelize
const initDatabase = async () => {
  try {
      await sequelize.authenticate();
      console.log('Connected to PostgreSQL database.');
      await sequelize.sync();
      console.log("Database synced successfully.");
  } catch (error) {
      console.error("Error syncing database:", error);
  }
};

initDatabase();
  

// Define routes here
// Example: 
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/stocks', require('./routes/stockRoutes'));


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


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
