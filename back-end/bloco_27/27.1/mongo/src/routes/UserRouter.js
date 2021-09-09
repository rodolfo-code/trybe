const express = require('express');
const { create } = require('../models/Author');

const router = express.Router();

const userSchema = require('../schemas/userSchema');

router.post('/user', async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const { error } = userSchema.validate(req.body);
  // console.log(error.isJoi);

  if (error) {
    return next(error);
  }

  const createUser = await create(firstName, lastName, email, password);

  res.status(200).json(createUser);
});

module.exports = router;
