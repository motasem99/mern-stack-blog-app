const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/user/User');

//----------------------------------------
// Register User
// ---------------------------------------

const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
  // check if user Exists

  const userExist = await User.findOne({ email: req?.body?.email });
  if (userExist) throw new Error('User already exists');

  try {
    // Register user
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------
// Login User
// ---------------------------------------

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  // check if user exist
  const user = await User.findOne({ email: req?.body?.email });
  if (!user) {
    throw new Error(`Login credentials are not valid`);
  }
  res.json('user login');
});

module.exports = { userRegisterCtrl, loginUserCtrl };
