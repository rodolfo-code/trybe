const express = require('express');

const routes = express.Router();

routes.get('/', (_req, res) => {
  res.send('Ola mundo');
});

module.exports = routes;
