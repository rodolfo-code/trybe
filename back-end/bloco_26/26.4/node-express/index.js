const express = require('express');
const Router = require('./router');

const app = express();
const PORT = 3001;

// const books = [
//   { id: 1, title: 'Senhor dos aneis', author: 'J.R.R Tokien' },
//   { id: 2, title: 'Dune', author: 'Frank Herbert' },
//   { id: 3, title: 'Foundation', author: 'Isaac Asimov' },
// ];

app.use(express.json());

app.use('/books', Router.books);

app.get('/', (_req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${3001}`);
});
