const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const Router = require('./router');
const errors = require('./middlewares/routerNotFound');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', Router.userRouter);
app.use('/btc', Router.priceRouter);
app.use('/posts', Router.postsRouter);

app.use(errors.routerNotFound);

app.listen(3000, () => {
  console.log('rodando o app');
});
