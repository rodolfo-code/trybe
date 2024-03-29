const connect = require('./connection');

const create = async (username, password) => {
  const db = await connect();
  const userCreated = await db.collection('users').insertOne({ username, password });
  return userCreated.ops[0].username;
}

const findByUsername = async (username) => {
  const db = await connect();
  const userData = await db.collection('users').findOne({ username });
  return userData;
}

module.exports = { 
  create, 
  findByUsername 
};
