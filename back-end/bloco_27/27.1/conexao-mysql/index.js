const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();
const PORT = 3000;

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) {
    return res.status(404).json({ message: 'NOT FOUND' });
  }

  return res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
