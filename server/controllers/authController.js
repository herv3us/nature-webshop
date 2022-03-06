const User = require('../models/userModel');
const ErrorRepsonse = require('../utilities/errorResponse');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(new ErrorRepsonse('Fill in both username and password', 400));
    }

    const user = await User.findOne({ username });
    if (!user) {
      return next(
        new ErrorRepsonse(
          "Can't fint that user in the database, try again",
          404
        )
      );
    }

    const isMatch = await user.checkPassword(password, user.password);
    if (!isMatch) {
      return next(new ErrorRepsonse('Wrong credentials', 401));
    }

    res.status(200).json({
      success: true,
      user: user,
      token: user.getToken(),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
