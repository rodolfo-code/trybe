const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const { ObjectId, ObjectID } = require('mongodb');

const MONGODB_URL = 'mongodb://localhost:27017/lecture_27_1';
const DB_NAME = 'live_lecture_27_1';

const app = express();

app.use(bodyParser.json());

// Conexão

const connection = mongodb
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Rotas

app.get('/characters', async (req, res) => {
  try {
    const rows = await connection.then((db) =>
      db.collection('characters').find().toArray(),
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao tentar realizar uma operação' });
  }
});

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001');
});
