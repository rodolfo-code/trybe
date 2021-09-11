const express = require('express');
const userDataValidate = require('../middlewares/userDataValidate');
const {
  create,
  getAllUsers,
  getUserById,
  updateUser,
} = require('../models/Users');

const router = express.Router();

const userSchema = require('../schemas/userSchema');

router.post('/user', userDataValidate, async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

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

router.put('/user/:id', userDataValidate, async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;

  const updatedUser = await updateUser(id, {
    firstName,
    lastName,
    email,
    password,
  });

  if (!updatedUser) {
    return next({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  res.status(200).json(updatedUser);
});

module.exports = router;
