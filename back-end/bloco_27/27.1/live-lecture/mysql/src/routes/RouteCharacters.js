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

router.post('/', async (req, res) => {
  const { name, cartoon } = req.body;

  const newCartoon = await Characters.createNewCharacter(name, cartoon);

  res.status(201).json(newCartoon);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, cartoon } = req.body;

  const updatedCharacter = await Characters.updatedCharacter(id, name, cartoon);

  return res.status(201).send(updatedCharacter);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deleteCharacter = await Characters.deleteCharacter(id);

  return res.status(201).json(deleteCharacter);
});

module.exports = router;
