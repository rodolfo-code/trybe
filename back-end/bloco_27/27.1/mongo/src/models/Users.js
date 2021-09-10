const { ObjectId } = require('mongodb');
const connection = require('./connection');

const formatUser = (update) => {
  const { _id: id, password, ...user } = update;

  return {
    id,
    ...user,
  };
};

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
  if (!ObjectId.isValid(id)) return null;

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

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const newUser = { firstName, lastName, email, password };

  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const update = await db
    .collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: newUser },
      { returnOriginal: false },
    );

  if (!update) return null;

  return formatUser(update.value);
};

module.exports = { create, getAllUsers, getUserById, updateUser };
