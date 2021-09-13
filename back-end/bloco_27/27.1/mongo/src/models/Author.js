const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findByName = async (firstName, middleName, lastName) => {
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  const db = await connection();
  const author = await db.collection('authors').find(query);

  if (!author) return null;

  return author;
};

const getAllAuthors = async () => {
  const db = await connection();
  const getAll = await db.collection('authors').find().toArray();

  if (!getAll) {
    return null;
  }

  return getAll;
};

const getById = async (id) => {
  const db = await connection();

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const author = await db.collection('authors').findOne(new ObjectId(id));

  if (!author) {
    return null;
  }

  return author;
};

const create = async (firstName, middleName, lastName) => {
  const db = await connection();

  const create = await db
    .collection('authors')
    .insertOne({ firstName, middleName, lastName });

  return {
    id: create.insertedId,
    firstName,
    middleName,
    lastName,
  };
};

module.exports = {
  getAllAuthors,
  getById,
  create,
  findByName,
};
