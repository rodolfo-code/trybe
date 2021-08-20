const express = require('express');

const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.get('/', (_req, res) => {
  res.send('Ola mundo');
});

routes.get('/usuario', UserController.index);

module.exports = routes;
