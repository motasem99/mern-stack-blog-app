const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./config/db/dbConnect');
const { userRegisterCtrl } = require('./controllers/users/userController');
const app = express();

// DB
dbConnect();

app.use(express.json());

// Register
app.post('/api/users/register', userRegisterCtrl);

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
