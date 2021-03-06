const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Vänligen fyll i ett önskat username'],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, 'Vänligen fyll i ditt förnamn'],
  },
  lastName: {
    type: String,
    required: [true, 'Vänligen fyll i ditt efternamn'],
  },
  address: {
    type: String,
    required: [true, 'Vänligen fyll i din postadress'],
  },
  zipCode: {
    type: String,
    required: [true, 'Vänligen tyll i postkod'],
  },
  city: {
    type: String,
    required: [true, 'Vänligen fyll i stad'],
  },
  password: {
    type: String,
    required: [true, 'Fyll i ett lösenord'],
    minlength: [8, 'Lösenordet måste vara minst 9 tecken.'],
  },
  role: {
    type: String,
  },
});

userSchema.pre('save', async function (next) {
  const saltRounds = 10;

  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
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
