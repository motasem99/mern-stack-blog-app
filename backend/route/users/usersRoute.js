const express = require('express');
const {
  userRegisterCtrl,
  loginUserCtrl,
  fetchUsersCtrl,
  deleteUserCtrl,
  fetchUserDetailsCtrl,
} = require('../../controllers/users/userController');
const authMiddleware = require('../../middlewares/auth/authMidlleware');

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);
userRoutes.post('/login', loginUserCtrl);
userRoutes.get('/', authMiddleware, fetchUsersCtrl);
userRoutes.delete('/:id', deleteUserCtrl);
userRoutes.get('/:id', fetchUserDetailsCtrl);

module.exports = userRoutes;
