const express = require('express');

const errorMiddleware = require('./middlewares/error');

const authors = require('./routes/routeAuthors');
const books = require('./routes/routeBooks');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/authors', authors);
app.use('/books', books);

app.use(errorMiddleware.authorError);
app.use(errorMiddleware.bookError);

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
