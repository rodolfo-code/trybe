const express = require('express');

const Books = require('../models/Books');

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Books.getAll();

  if (!books) {
    return res.status(400).send({ message: 'Dados não encontrados' });
  }

  return res.status(201).send(books);
});

router.get('/:authorId', async (req, res) => {
  const { authorId } = req.params;

  const books = await Books.getByAuthorId(authorId);

  if (!books) {
    return res.status(404).send({ message: 'Dados não encontrados' });
  }

  return res.status(201).send(books);
});

module.exports = router;
