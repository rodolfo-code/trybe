const connection = require('./connection');

async function getAllBooks() {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books',
  );

  return books;
}

module.exports = {
  getAllBooks,
};
