const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  };
};

async function getAllBooks() {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books',
  );

  return books.map(serialize);
}

async function findByAuthorId(author_id) {
  const query = 'SELECT * FROM books WHERE author_id=?';

  const [book] = await connection.execute(query, [author_id]);

  if (book.length === 0) return null;

  return book.map(serialize);
}

async function findById(id) {
  const query = 'SELECT * FROM books WHERE id=?';

  const [book] = await connection.execute(query, [id]);

  if (!book) return null;

  return book.map(serialize);
}

async function createBook(id, title, author_id) {
  const query = 'INSERT INTO books (id, title, author_id) VALUES (?, ?, ?)';

  await connection.execute(query, [id, title, author_id]);
}

module.exports = {
  getAllBooks,
  findByAuthorId,
  findById,
  createBook,
};
