const express = require('express');
const { getAllAuthors, getById } = require('./models/Author');
const { getAllBooks, getBookById } = require('./models/Books');

const app = express();
const bodyParser = require('body-parser').json();

const PORT = 3000;

app.use(bodyParser);

app.get('/', (_req, res) => {
  res.send('ola');
});

app.get('/authors', async (req, res) => {
  const authors = await getAllAuthors();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await getById(id);

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await getBookById(id);

  res.status(200).json(book);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
