const connection = require('./connection');

const serialize = (bookData) => {
  return {
    title: bookData.title,
    authorId: bookData.authorId,
  };
};

async function getByAuthorId(id) {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM books WHERE author_id=?',
    [id],
  );
  if (books.length === 0) {
    return null;
  }

  return books.map(serialize);
}

module.exports = {
  getByAuthorId,
};
