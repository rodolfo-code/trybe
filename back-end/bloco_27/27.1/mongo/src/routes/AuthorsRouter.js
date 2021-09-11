const express = require('express');

const { getAllAuthors, getById, create } = require('../models/Author');
const AuthorService = require('../services/serviceAuthor');

const router = express.Router();

router.get('/authors', async (req, res) => {
  const authors = await AuthorService.getAll();

  res.status(200).json(authors);
});

router.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await AuthorService.findById(id);

  res.status(200).json(authors);
});

router.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await AuthorService.create(firstName, middleName, lastName);

  if (!newAuthor) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  res.status(200).json(newAuthor);
});

module.exports = router;
