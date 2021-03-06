const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  googleId: String,
  facebookId: String,
  avatar: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
