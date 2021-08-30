const router = require('express').Router();
let User = require('../models/user.model');

//this route handles the get method for users
//returning us a list of all the users in the database
router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//this route is handling the post req for the creation
//of a new user in the database
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json('User Added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
