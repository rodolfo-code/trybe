const express = require('express');
const fs = require('fs').promises;

const auxFunction = require('../utils');
const DIRETORIO = './books.json';

const router = express.Router();
router.get('/search', async (req, res) => {
  const { title } = req.query;

  const books = await auxFunction();
  const search = books.filter((item) => item.title === title);

  res.status(200).json({ books: search });
});

router.get('/', async (_req, res) => {
  const books = await auxFunction();

  return res.status(200).json({ books: books });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const books = await auxFunction();

  const bookById = books.find((book) => book.id === +id);
  if (!bookById) {
    return res.status(404).json({ message: 'Book not found' });
  }

  return res.status(200).json({ message: bookById });
});

router.post('/', async (req, res) => {
  const newBook = req.body;

  const books = await auxFunction();
  books.push(newBook);

  await fs.writeFile(DIRETORIO, JSON.stringify(books));

  return res.status(200).json({ message: 'Novo livro inserido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const alteredBook = req.body;
  const { id } = req.params;

  const books = await auxFunction();
  const index = books.findIndex((book) => book.id === +id);

  if (index == -1) {
    return res.status(400).json({ message: 'livro nao encontrado' });
  }

  const newBook = {
    id: +id,
    ...alteredBook,
  };

  books.splice(index, 1, newBook);
  await fs.writeFile(DIRETORIO, JSON.stringify(books));

  return res.status(200).json(books);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const books = await auxFunction();

  const index = books.findIndex((book) => book.id == id);

  if (index == -1) {
    return res.status(400).json({ message: 'livro nao encontrado' });
  }

  books.splice(index, 1);

  await fs.writeFile(DIRETORIO, JSON.stringify(books));

  return res.status(200).json({ message: 'Livro excluido com sucesso' });
});

module.exports = router;
