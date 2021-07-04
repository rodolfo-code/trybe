const express = require('express');
const newBookValidation = require('../middlewares/newBookValidation');

const Books = require('../models/Books');

const router = express.Router();

// router.get('/', async (req, res) => {
//   const books = await Books.getAll();

//   if (!books) {
//     return res.status(400).send({ message: 'Dados não encontrados' });
//   }

//   return res.status(201).send(books);
// });

router.get('/', async (req, res) => {
  const id = req.query.id;

  const book = id ? await Books.getById(id) : await Books.getAll();

  if (!book) {
    return res.status(404).send({ message: 'NOT FOUND' });
  }

  return res.status(201).send(book);
});

router.get('/:authorId', async (req, res) => {
  const { authorId } = req.params;

  const books = await Books.getByAuthorId(authorId);

  if (!books) {
    return res.status(404).send({ message: 'Dados não encontrados' });
  }

  return res.status(201).send(books);
});

router.post('/', newBookValidation, async (req, res) => {
  const { title, author_id } = req.body;
  await Books.createNewBook(title, author_id);

  res.status(201).send({ message: 'Novo livro criado' });
});

module.exports = router;
