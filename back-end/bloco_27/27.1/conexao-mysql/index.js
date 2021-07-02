const express = require('express');

const authors = require('./routes/authors');
const books = require('./routes/books');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/authors', authors);
app.use('/books', books);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
