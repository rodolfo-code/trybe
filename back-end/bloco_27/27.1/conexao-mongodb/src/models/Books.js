const connection = require('./connection');
const { ObjectId } = require('mongodb');

const newBook = ({ _id, title, author_id }) => {
  return {
    id: _id,
    title,
    authorId: author_id,
  };
};

async function getAll() {
  try {
    const db = await connection();
    const books = await db.collection('books').find({}).toArray();
    return books.map(newBook);
  } catch (err) {
    return null;
  }
}

async function getByAuthorId(authorId) {
  try {
    const db = await connection();
    const books = await db
      .collection('books')
      .find({ author_id: Number(authorId) })
      .toArray();
    return books.map(newBook);
  } catch (err) {
    return null;
  }
}

module.exports = { getAll, getByAuthorId };
