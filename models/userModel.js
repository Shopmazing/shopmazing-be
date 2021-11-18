'use strict';
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  isAdmin: Boolean,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
