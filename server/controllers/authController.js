const User = require('../models/userModel');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return;
    }

    const user = await User.findOne({ username });
    if (!user) {
      return;
    }

    const isMatch = await user.checkPassword(password, user.password);
    if (!isMatch) {
      return;
    }

    res.status(200).json({
      success: true,
      user: user,
      token: user.getToken(),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login };
