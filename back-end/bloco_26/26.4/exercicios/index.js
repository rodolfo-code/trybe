const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const authMiddleware = require('./authMiddleware');
const generateToken = require('./token');

const fs = require('fs/promises');

const simpsonsUtils = require('./utils.js');

const app = express();

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    res.status(401).send({ message: 'missing fields' });
  } else {
    res.status(200).send({ token: `${generateToken()}` });
  }
});

app.use(authMiddleware);

// =============================================== //

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
  next();
});

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

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.find((item) => item.id === id)) {
      res.send({ message: 'id already exists' });
    } else {
      simpsons.push({ id, name });

      await simpsonsUtils.setSimpsons(simpsons);
      res.status(204).send(simpsons);
    }
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
