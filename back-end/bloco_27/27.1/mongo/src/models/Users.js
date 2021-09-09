const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const db = await connection();
  const create = await db
    .collection('users')
    .insertOne({ firstName, lastName, email, password });

  const { _id: id, firstName, lastName, email } = create;

  return {
    id,
    firstName,
    lastName,
    email,
  };
};

module.exports = { create };
