const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllBooks = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();

  return books;
};

const getBookById = async (id) => {
  const db = await connection();

  if (!ObjectId.isValid(id)) {
    return null;
  }
  const book = await db.collection('books').findOne(new ObjectId(id));

  if (!book) {
    return null;
  }

  return book;
};

module.exports = {
  getAllBooks,
  getBookById,
};
