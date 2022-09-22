const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const dbConnect = require('./config/db/dbConnect');
const app = express();

// DB
dbConnect();

// Register
app.post('/api/users/register', (req, res) => {
  // business logic
  res.json({
    user: 'User Registered',
  });
});

// Login
app.post('/api/users/login', (req, res) => {
  // business logic
  res.json({
    user: 'User Login',
  });
});

// Fetch all user
app.get('/api/users', (req, res) => {
  // business logic
  res.json({
    user: 'Fetch all users',
  });
});

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
