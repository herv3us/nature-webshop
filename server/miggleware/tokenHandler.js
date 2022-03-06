const jwt = require('jsonwebtoken');
const ErrorRepsonse = require('../utilities/errorResponse');

const tokenHandler = async (req, res, next) => {
  try {
    //   console.log(req.headers.authorization);
    //   const token = req.headers.authorization?.split(' ')[1];
    const token = req.headers.authorization?.split(' ')[1];

    console.log('in tokenhandler', token);

    if (!token) {
      return next(new ErrorRepsonse('Token missing', 400));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = tokenHandler;
