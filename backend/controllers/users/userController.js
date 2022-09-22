const User = require('../../model/user/User');

//----------------------------------------
// Register
// ---------------------------------------

const userRegisterCtrl = async (req, res) => {
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
};

module.exports = { userRegisterCtrl };
