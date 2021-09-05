const express = require('express');

const {
  isValidEmail,
  isValidPassword,
  isValidUsername,
} = require('../middlewares/validation');
const { validEmail, validPassword } = require('../middlewares/loginValidate');

const router = express.Router();

router.post(
  '/register',
  isValidPassword,
  isValidEmail,
  isValidUsername,
  (req, res) => {
    res.status(201).json({ message: 'user created' });
  },
);

router.post('/login', validEmail, validPassword, (req, res) => {
  return res.status(200).json({ token: '86567349784e' });
});

module.exports = router;
