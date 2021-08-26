require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { getUserService } = require('./services/User');
const userController = require('./services/User');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const connection = require('./models/connection');

const userService = getUserService(['admin', 'user']);

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/users', userController.createUser(connection, userService));

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
