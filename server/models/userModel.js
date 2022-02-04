const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, 'Please enter a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter a last name'],
  },
  address: {
    type: String,
    required: [true, 'Please enter your address'],
  },
  zipCode: {
    type: String,
    required: [true, 'Please enter your zip code'],
  },
  password: {
    type: String,
    required: [true, 'please enter a password.'],
    minlength: [8, 'Password needs to be at least 8 characters long'],
  },
});

userSchema.pre('save', async function (next) {
  const saltRounds = 10;

  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
});

userSchema.methods.checkPassword = function (enterdPass, userPass) {
  return bcrypt.compare(enterdPass, userPass);
};

userSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

userSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    (returnedObj.id = returnedObj._id.toString()),
      delete returnedObj._id,
      delete returnedObj.__v,
      delete returnedObj.password;
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
