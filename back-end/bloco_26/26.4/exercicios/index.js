const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const fs = require('fs/promises');

const simpsonsUtils = require('./utils.js');

const app = express();

app.use(bodyParser.json());

app.get(
  '/simpsons',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    res.send(simpsons);
  }),
);

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const list = await simpsonsUtils.getSimpsons();
    const findId = list.find((item) => item.id === id);
    if (!findId) {
      res.status(401).send({ message: 'simpson not found' });
    }
    res.send(findId);
  }),
);

// =============================== //

app.get('/ping', (req, res) => {
  res.json({ message: 'pong!' });
});

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.status(200).json({ message: `Hello, ${name}` });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3000, () => {
  console.log('Ouvindo porta 3000');
});
