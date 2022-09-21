const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const dbConnect = require('./config/db/dbConnect');
const app = express();

// DB
dbConnect();
console.log(process.env);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
