const express = require('express');
const cors = require('cors');

const Router = require('./router');
const authToken = require('./middlewares/authToken');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello world' });
});

app.use(authToken);

app.use('/books', Router.books);

app.listen(PORT, () => {
  console.log(`App running on port ${3001}`);
});
