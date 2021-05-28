const express = require('express');
const rescue = require('express-rescue');

const app = express();
const router = express.Router();

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    next();
  } else {
    res.sendStatus(401);
  }
  console.log();
};

const logMiddleware = (req, res, next) => {
  console.log(`${req.method} : ${req.path}`);
  next();
};

const errorMiddleware = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({
    message: 'Algo deu errado',
  });
  next();
};

router.use(authMiddleware);
app.use(logMiddleware);
app.use(express.json());

router.get('/dash', (req, res) => {
  res.send({ message: 'Admin dashboard' });
});

app.use('/admin', router);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/node', (req, res) => {
  res.send({ message: 'Hello world' });
});

app.post('/node', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get(
  '/error',
  rescue(async (req, res) => {
    throw new Error('Errrrrrrrrou!');
  }),
);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
