const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

async function getAll() {
  try {
    const db = await connection();
    const authors = await db.collection('authors').find({}).toArray();
    return authors.map(({ _id, firstName, middleName, lastName }) => {
      return getNewAuthor({
        id: _id,
        firstName,
        middleName,
        lastName,
      });
    });
  } catch (_err) {
    return null;
  }
}

async function findById(id) {
  try {
    const db = await connection();
    const author = await db.collection('authors').findOne(ObjectId(id));
    const { firstName, middleName, lastName } = author;
    return getNewAuthor({
      id,
      firstName,
      middleName,
      lastName,
    });
  } catch (err) {
    return null;
  }
}

async function createNewAuthor(title, author_id) {
  try {
    const db = await connection();
    return await db.collection('authors').insertOne({ title, author_id });
  } catch (err) {
    return null;
  }
}

module.exports = { getAll, findById, createNewAuthor };
