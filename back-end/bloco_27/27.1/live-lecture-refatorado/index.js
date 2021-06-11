const express = require('express');
const { ObjectId, ObjectID } = require('mongodb');

const connection = require('./models/connection');
const characters = require('./routers/charactersRouter');

const app = express();

app.use(express.json());

// Rotas

app.use('/characters', characters);

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001');
});
