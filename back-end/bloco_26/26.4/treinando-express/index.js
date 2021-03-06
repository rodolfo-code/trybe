const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
const { getPost, getUser } = require('./utils');
const { deleteRecipe, changeRecipe } = require('./utilsRecipes');

const app = express();

app.use(express.json());

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  const regexAuth = /^(\d|\w){12}$/gm;
  const validAuth = regexAuth.test(authorization);
  if (validAuth) {
    next();
  }
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = /^\d{4,8}$/gm;

  const validEmail = regexEmail.test(email);
  const validPassword = regexPassword.test(password);

  if (validEmail && validPassword) {
    const token = crypto.randomBytes(6).toString('hex');
    res.status(200).send({ token });
  } else {
    return res.status(401).send({ message: 'email or password is incorrect.' });
  }
});

function verifyToken(token) {
  const tokenRegex = /^(\d|\w){12}$/gm;
  return tokenRegex.test(token);
}

app.post('/btc/price', async (req, res) => {
  const { authorization } = req.headers;
  const tokenRegex = /^(\d|\w){12}$/gm;
  const validToken = tokenRegex.test(authorization);
  if (validToken) {
    const dataApi = await axios
      .get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
      .then(({ data }) => data);
    console.log(dataApi);
    res.status(200).json({ dataApi });
  } else {
    res.status(401).send({ message: 'email or password is incorrect.' });
  }
  res.send(authorization);
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const response = await getPost(id);
  if (response) {
    res.status(200).send({ response });
  } else if (!response) {
    res.status(401).send({ message: 'id not found' });
  }
});

app.get('/posts', async (req, res) => {
  const response = await getPost();
  if (!response) {
    res.status(404).send({ message: 'id not found' });
  }
  res.status(200).send({ response });
});

app.get('/user/:name', async (req, res) => {
  const { name } = req.params;
  const response = await getUser(name);
  if (response) {
    return res.status(200).send({ response });
  }
  return res.status(404).send({ message: 'user not found' });
});

// ========== Deve validar a operação e retornar o resultado da mesma ======== //

app.get('/:operacao/:numero1/:numero2', (req, res) => {
  const { operacao, numero1, numero2 } = req.params;
  const parseNumber1 = parseInt(numero1);
  const parseNumber2 = parseInt(numero2);
  switch (operacao) {
    case 'soma':
      const soma = parseNumber1 + parseNumber2;
      res.status(200).send({ resultado: soma });
      break;
    case 'subtracao':
      const sub = parseNumber1 - parseNumber2;
      res.status(200).json({ resultado: sub });
      break;

    case 'divisao':
      const div = parseNumber1 / parseNumber2;
      res.status(200).json({ resultado: div });
      break;

    case 'multiplicacao':
      const mult = parseNumber1 * parseNumber2;
      res.status(200).json({ resultado: mult });
      break;

    default:
      res.status(400).json({ message: 'invalid operation' });
      break;
  }
});

// ======== Deletar a receita no banco de dados e retornar a receita deletada ====== /

app.delete('/recipe/:id', async (req, res) => {
  const { id } = req.params;
  const response = await deleteRecipe(parseInt(id));
  console.log(response);
  if (response === null) {
    return res.status(404).send({ message: 'recipe not found' });
  }
  return res.status(200).send(response[0]);
});

app.put('/recipe/:id', async (req, res) => {
  const { id } = req.params;
  const { name, ingredientes } = req.body;
  const newObj = { id: parseInt(id), name, ingredientes };
  const response = await changeRecipe(newObj);
  if (response === null) {
    return res.status(404).send({ message: 'recipe not found ' });
  }
  return res.status(200).send(response);
});

app.get('/param', async (req, res) => {
  const { id } = req.query;
  const response = await getPost(id);
  if (!response) {
    return res.status(404).send({ message: 'nao encontrado' });
  }
  return res.status(200).send(response);
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
