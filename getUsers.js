'use strict'
const {response} = require('express');
const User = require('./models/userModel.js');

async function getUsers(req, res) {
  try {
    const usersFromDB = await User.find({});
    if (usersFromDB.length > 0) {
      res.status(200).send(usersFromDB);
    } else {
      console.log(error);
      res.status(404).send('No Products');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
}

module.exports = getUsers;
