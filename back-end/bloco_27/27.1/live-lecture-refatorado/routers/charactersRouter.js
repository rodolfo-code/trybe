const express = require('express');
const characterModel = require('../models/mongoModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const response = await characterModel.getAll();
    res.status(201).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Erro ao executar operação' });
  }
});

router.post('/', async (_req, res) => {
  try {
    const newCharacter = _req.body;
    const response = await characterModel.newCharacter(newCharacter);
    res.status(201).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Erro ao executar operação' });
  }
});

router.get('/:id', async (_req, res) => {
  try {
    const { id } = _req.params;
    const response = await characterModel.getById(id);
    res.status(201).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Erro ao executar operação' });
  }
});

router.put('/:id', async (_req, res) => {
  try {
    const { id } = _req.params;
    const newData = _req.body;
    const response = await characterModel.updateChar(id, newData);
    res.status(500).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Erro ao executar operação' });
  }
});

router.delete('/:id', async (_req, res) => {
  try {
    const { id } = _req.params;
    await characterModel.deleteChar(id);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Erro ao executar operação' });
  }
});

module.exports = router;
