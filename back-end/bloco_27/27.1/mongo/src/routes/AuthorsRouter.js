const express = require('express');

const { getAllAuthors, getById, create } = require('../models/Author');

const router = express.Router();

router.get('/authors', async (req, res) => {
  const authors = await getAllAuthors();

  res.status(200).json(authors);
});

router.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await getById(id);

  res.status(200).json(authors);
});

router.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await create(firstName, middleName, lastName);

  res.status(200).json(newAuthor);
});

module.exports = router;
