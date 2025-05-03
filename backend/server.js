const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Print environment variables
console.log('Debug - Environment Check:', {
  MONGODB_URI_exists: !!process.env.MONGODB_URI,
  MONGODB_URI_format: process.env.MONGODB_URI ? 
    process.env.MONGODB_URI.replace(
      /mongodb\+srv:\/\/([^:]+):([^@]+)@/,
      'mongodb+srv://USERNAME:PASSWORD@'
    ) : 'not provided'
});

// MongoDB Connection with better options
console.log('Attempting to connect to MongoDB...');

const options = {
  serverSelectionTimeoutMS: 5000,
  family: 4, // Force IPv4
  retryWrites: true,
  w: 'majority'
};

// Connect to MongoDB with better error handling
mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Successfully connected to MongoDB!');
    console.log('Connection state:', mongoose.connection.readyState);
    return mongoose.connection.db.admin().ping();
  })
  .then(() => {
    console.log('MongoDB ping successful! Database is responsive.');
  })
  .catch(err => {
    console.error('MongoDB connection error details:', {
      name: err.name,
      message: err.message,
      code: err.code,
      state: mongoose.connection.readyState
    });
    
    if (err.name === 'MongoServerSelectionError') {
      console.log('Failed to select MongoDB server. Possible causes:');
      console.log('1. Network connectivity issues');
      console.log('2. IP address not whitelisted in MongoDB Atlas');
      console.log('3. Incorrect connection string');
      console.log('4. Database server is down');
    }
});

// Monitor MongoDB connection
mongoose.connection.on('connected', () => console.log('Mongoose connected to DB'));
mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// Basic Route
app.get("/", (req, res) => {
  res.send("Backend server is running.");
});

// Test MongoDB Connection
app.get('/api/test/db', async (req, res) => {
  try {
    const connectionState = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    
    let pingResult = 'Failed';
    if (connectionState === 1) {
      try {
        await mongoose.connection.db.admin().ping();
        pingResult = 'Success';
      } catch (e) {
        pingResult = `Failed: ${e.message}`;
      }
    }
    
    res.json({
      status: 'success',
      connection: states[connectionState],
      state: connectionState,
      ping: pingResult,
      uri_exists: !!process.env.MONGODB_URI
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
      details: error
    });
  }
});

// Import Routes
const tasksRouter = require("./routes/tasks");
const flashcardsRouter = require("./routes/flashcards");
const quizzesRouter = require("./routes/quizzes");
const studyPlanRoutes = require('./routes/studyPlans');
const aiqnaRouter = require("./routes/aiqna");

// Use Routes
app.use("/api/tasks", tasksRouter);
app.use("/api/flashcards", flashcardsRouter);
app.use("/api/quizzes", quizzesRouter);
app.use("/api/studyplans", studyPlanRoutes);
app.use("/api/aiqna", aiqnaRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

