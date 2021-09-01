const express = require('express');
const fs = require('fs').promises;

const app = express();

const PORT = 3001;

const DIRETORIO = './books.json';

// const books = [
//   { id: 1, title: 'Senhor dos aneis', author: 'J.R.R Tokien' },
//   { id: 2, title: 'Dune', author: 'Frank Herbert' },
//   { id: 3, title: 'Foundation', author: 'Isaac Asimov' },
// ];

app.use(express.json());

const auxFunction = async () => {
  const books = await fs.readFile(DIRETORIO, 'utf-8');
  return JSON.parse(books);
};

app.get('/', (_req, res) => {
  res.json({ message: 'Hello world' });
});

app.get('/books', async (_req, res) => {
  const books = await auxFunction();

  return res.status(200).json({ books: books });
});

app.post('/books', async (req, res) => {
  const newBook = req.body;
  console.log(req.body);

  const books = await auxFunction();

  books.push(newBook);
  console.log(books);

  await fs.writeFile(DIRETORIO, JSON.stringify(books));

  return res.status(200).json({ message: 'Novo livro inserido com sucesso' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${3001}`);
});
