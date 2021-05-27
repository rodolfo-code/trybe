const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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
