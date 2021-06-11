const mongodb = require('mongodb').MongoClient;

const MONGODB_URL = 'mongodb://localhost:27017/lecture_27_1';
const DB_NAME = 'live_lecture_27_1';

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

module.exports = connection;
