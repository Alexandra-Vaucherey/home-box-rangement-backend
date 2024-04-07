const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  phone: Number,
  email: String,
  password: String,
  token: String,
  
 });

const User = mongoose.model('users', userSchema);

module.exports = User;