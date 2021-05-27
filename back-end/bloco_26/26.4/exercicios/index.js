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

app.listen(3000, () => {
  console.log('Ouvindo porta 3000');
});
