const express = require('express');
const router = express.Router();

const Characters = require('../models/characterModel');

router.get('/', async (req, res) => {
  const characters = await Characters.getAllCharacters();

  if (!characters) {
    return res.status(400).json({ message: 'Dados não encontrados' });
  }
  return res.status(201).json(characters);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const character = await Characters.findById(id);

  if (!character) {
    return res.status(400).json({ message: 'Dados não encontrados' });
  }
  return res.status(201).send(character);
});

router.post('/', async (req, res) => {
  const { name, cartoon } = req.body;

  const newCharacter = await Characters.create(name, cartoon);

  return res.status(201).json(newCharacter);
});

module.exports = router;
