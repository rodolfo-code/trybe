const express = require('express');
const middlewares = require('../middlewares/validation');
const databse = require('../database');
const { getAll, add } = require('../model/clients_model');

const router = express.Router();

// Listando todas as pessoas
router.get('/', async (req, res) => {
  try {
    const getClients = await getAll();
    res.status(200).send(getClients);
  } catch (err) {
    res.status(500).send({ message: 'Fatal error' });
  }
});

// Cadastrando nova pessoa
router.post('/', middlewares.isValidName, async (req, res) => {
  try {
    const client = await add(req.body);
    return res.status(200).send(client);
  } catch (err) {}

  return res.status(201).json({ clients: databse[databse.length - 1] });
});

module.exports = router;
