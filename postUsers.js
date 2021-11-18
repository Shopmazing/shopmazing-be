'use strict'
const User = require('./models/userModel.js');
const verifyUser = require('./auth.js');

async function handlePostUser(req, res) {
  verifyUser(req, async (err, user) => {
    if (err) {
      res.status(498).send('Token not valid');
      console.log('Invalid Token');
    } else {
      try {
        let successUser = await User.create(req.body);
        if (successUser) {
          res.status(200).send(successUser);
        } else {
          res.status(404).send('No Product');
        }
      } catch (e) {
        console.error(e);
        res.status(500).send('server error')
      }
    }
  });
};

module.exports = handlePostUser;
