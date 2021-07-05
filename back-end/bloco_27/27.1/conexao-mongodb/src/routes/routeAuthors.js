const express = require('express');

const Authors = require('../services/AuthorServices');

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await Authors.getAll();

  if (!authors) {
    return res.status(404).send({ message: 'Dados não encontrados' });
  }

  return res.status(201).send(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Authors.findById(id);

  if (!author) {
    return res.status(404).send({ message: 'Id nao encontrado' });
  }

  return res.status(201).send(author);
});

router.post('/', async (req, res) => {
  const { id, title, author_id } = req.body;

  const author = await Authors.createNewAuthor(title, author_id);

  if (!author) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  res.status(201).send(author);
});

module.exports = router;
