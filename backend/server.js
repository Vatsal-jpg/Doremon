const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./userRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Routes
app.use('/api', userRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
