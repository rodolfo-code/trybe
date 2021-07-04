const express = require('express');
const Characters = require('../models/characterModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const [characters] = await Characters.getAllCharacters();

  if (!characters) {
    return res.status(400).send({ message: 'Dados não encontrados' });
  }

  return res.status(201).send(characters);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const [character] = await Characters.characterById(id);

  if (!character) {
    return res.status(400).send({ message: 'Personagens não encontrados' });
  }

  return res.status(201).send(character);
});

module.exports = router;
