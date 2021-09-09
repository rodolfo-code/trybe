const express = require('express');
const error = require('./middlewares/error');
const Router = require('./routes');

const app = express();
const bodyParser = require('body-parser').json();

const PORT = 3000;

app.use(bodyParser);

app.get('/', (_req, res) => {
  res.send('ola');
});

app.use(Router.AuthorsRouter);
app.use(Router.BooksRouter);
app.use(Router.UserRouter);

app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
