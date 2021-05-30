const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Hello world');
});

const langs = ['HTML', 'CSS', 'Javascript', 'React'];

app.get('/langs', (_req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(`${name}`);
  res.send(`Linguagem ${name} salva`);
});

app.delete('/langs', (req, res) => {
  const { name } = req.body;
  langs.splice(langs.indexOf(name), 1);
  res.send(`Linguagem ${name} deletada`);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo a porta 3000');
});
