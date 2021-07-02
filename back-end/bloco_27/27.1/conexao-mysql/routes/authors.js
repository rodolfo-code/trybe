const express = require('express');

const Author = require('../models/Author');
const nameMiddleware = require('../middlewares/authorValidate');
const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).send(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) {
    return res.status(404).send({ message: 'NOT FOUND' });
  }

  return res.status(200).send(author);
});

router.post('/', nameMiddleware, async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  await Author.createAuthor(first_name, middle_name, last_name);
  return res.status(201).send({ message: 'Autor criado' });
});

module.exports = router;
