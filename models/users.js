const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    message: ({value}) => `Username ${value} is not valid`
  },
  phone: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    select: false,
    validate: {
      validator: val => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val),
      message: ({value}) => `${value} is not a valid email address.`,
      }
  },
  password: {
    type: String,
    select: false,
    required: () => this.status !== "pending",
  },
  token: String,
  
 });

const User = mongoose.model('users', userSchema);

module.exports = User;