'use strict';
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	isAdmin: True,
	email: 'jordano.fleming@gmail.com'
});

const User = mongoose.model('User', userSchema);

module.exports = User;