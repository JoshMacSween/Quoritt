const router = require('express').Router()
const User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email
  const newUser = new User({username, password, email})

  newUser.save()
    .then(() => res.json('New user added!'))
    .catch(err => res.status(400).json('Err: ' + err))
})

module.exports = router

