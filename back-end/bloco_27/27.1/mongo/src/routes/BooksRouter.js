const express = require('express');

const { getAllBooks, getBookById } = require('../models/Books');

const router = express.Router();

router.get('/books', async (req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books);
});

router.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await getBookById(id);

  res.status(200).json(book);
});

module.exports = router;
