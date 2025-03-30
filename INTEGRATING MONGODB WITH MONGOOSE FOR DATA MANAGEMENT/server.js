require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const clockRoutes = require('./routes/clockRoutes'); // Import routes
// Middleware to parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('Could not connect to MongoDB:', err));

// Set up the routes for CRUD operations
app.use('/api/clocks', clockRoutes); // Prefix routes with '/api/clocks'
// Add this route to handle requests to the root path
app.get('/', (req, res) => {
 res.send('Welcome to the Clock API!');
});
// Start the server
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
