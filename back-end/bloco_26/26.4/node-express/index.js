const express = require('express');
const Router = require('./router');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/books', Router.books);

app.get('/', (_req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${3001}`);
});
