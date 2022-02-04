const User = require('./../models/userModel');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return;
    }

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { username, firstName, lastName, address, zipCode, password } =
      req.body;

    const user = await User.create({
      username,
      firstName,
      lastName,
      address,
      zipCode,
      password,
      role: 'user',
      cart: [],
    });

    res.status(200).json({
      success: true,
      user: user,
      token: user.getToken(),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
