const Books = require('../models/Books');

const getAll = async () => {
  return await Books.getAll();
};

const getById = async (id) => {
  const book = await Books.getById(id);

  if (!book) {
    return {
      error: {
        code: 'NOT FOUND',
        message: 'Livro não encontrado',
      },
    };
  }
  return book;
};

const create = async (title, authorId) => {
  const create = await Books.findById(authorId);

  if (!create) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }
  return await Books.createNewBook(title, authorId);
};

module.exports = {
  getAll,
  getById,
  create,
};
