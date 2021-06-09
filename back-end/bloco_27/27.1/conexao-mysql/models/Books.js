const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.authorId,
  };
};

async function getByAuthorId(id) {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE author_id=?',
    [id],
  );
  if (books.length === 0) {
    return null;
  }

  return books.map(serialize);
}

async function getById(id) {
  const [book] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id=?',
    [id],
  );
  if (book.length === 0) {
    return null;
  }
  return book.map(serialize);
}

module.exports = {
  getByAuthorId,
  getById,
};
