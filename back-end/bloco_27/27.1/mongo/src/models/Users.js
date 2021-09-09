const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const db = await connection();
  const create = await db
    .collection('users')
    .insertOne({ firstName, lastName, email, password });

  return {
    id: create.insertedId,
    firstName,
    lastName,
    email,
  };
};

const getAllUsers = async () => {
  const db = await connection();
  const users = await db.collection('users').find().toArray();

  const allUsers = users || [];

  return allUsers;
};

const getUserById = async (id) => {
  const db = await connection();

  if (!ObjectId.isValid(id)) {
    return null;
  }
  const user = await db.collection('users').findOne(new ObjectId(id));

  if (!user) {
    return null;
  }

  return user;
};

module.exports = { create, getAllUsers, getUserById };
