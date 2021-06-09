const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) {
    return res.status(404).send({ message: 'Not Found' });
  }
  return res.status(200).send(author);
});

app.get('/books', async (req, res) => {
  const id = req.query.q;
  const book = await Books.getByAuthorId(id);

  if (!book) {
    return res.status(404).send({ message: 'Not Found' });
  }
  return res.status(200).send(book);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);

  if (!book) {
    return res.status(404).send({ message: 'Not Found' });
  }
  return res.status(200).send(book);
});

app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
