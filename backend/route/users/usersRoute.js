const express = require('express');
const {
  userRegisterCtrl,
  loginUserCtrl,
  fetchUsersCtrl,
  deleteUserCtrl,
} = require('../../controllers/users/userController');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);
userRoutes.post('/login', loginUserCtrl);
userRoutes.get('/', fetchUsersCtrl);
userRoutes.delete('/:id', deleteUserCtrl);

module.exports = userRoutes;
