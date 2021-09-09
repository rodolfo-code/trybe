const express = require('express');
const { create, getAllUsers, getUserById } = require('../models/Users');

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

router.get('/user', async (req, res) => {
  const users = await getAllUsers();

  res.status(200).json(users);
});

router.get('/user/:id', async (req, res, next) => {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return next({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  res.status(200).json(user);
});

module.exports = router;
