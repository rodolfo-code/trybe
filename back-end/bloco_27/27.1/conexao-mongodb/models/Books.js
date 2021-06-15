const connection = require('./connection');

const Author = require('./Author');

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

async function isValid(title, authorId) {
  if (!title || typeof title !== 'string') return false;
  if (
    !authorId ||
    typeof authorId !== 'number' ||
    !(await Author.findById(authorId))
  )
    return false;

  return true;
}

async function create(title, authorId) {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, authorId],
  );
}

module.exports = {
  getByAuthorId,
  getById,
  isValid,
  create,
};
