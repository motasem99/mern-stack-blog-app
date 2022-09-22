const express = require('express');
const { userRegisterCtrl } = require('../../controllers/users/userController');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);

module.exports = userRoutes;
