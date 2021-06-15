const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;
//   const author = await Author.findById(id);

//   if (!author) {
//     return res.status(404).send({ message: 'Not Found' });
//   }
//   return res.status(200).send(author);
// });

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const isValid = Author.isValid(first_name, middle_name, last_name);
  if (!isValid) {
    return res.status(400).send({ message: 'Dados Invalidos' });
  }
  await Author.create(first_name, middle_name, last_name);
  return res.status(201).send({ message: 'Autor Criado com Sucesso' });
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

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const isValid = Books.isValid(title, author_id);

  if (!isValid) {
    return res.status(400).send({ message: 'Dados inválidos' });
  }
  await Books.create(title, author_id);
  return res.status(201).send({ message: 'Livro criado com sucesso! ' });
});

app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
