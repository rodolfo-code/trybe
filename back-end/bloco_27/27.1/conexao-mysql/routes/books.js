const express = require('express');

const Books = require('../models/Books');
const newBookDataValidation = require('../middlewares/booksValidation');

const router = express.Router();

router.get('/', async (req, res) => {
  const author_id = req.query.q;

  const books = author_id
    ? await Books.findByAuthorId(author_id)
    : await Books.getAllBooks();

  return res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Books.findById(id);

  if (!book) {
    return res.status(404).send({ message: 'NOT FOUND' });
  }
  return res.status(200).send(book);
});

router.post('/', newBookDataValidation, async (req, res) => {
  const { id, title, author_id } = req.body;

  await Books.createBook(id, title, author_id);

  res.status(201).send({ message: 'Livro criado com sucesso' });
});

module.exports = router;
