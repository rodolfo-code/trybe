const BookModel = require('../models/Books');

const getAllBooks = async () => {
  const books = await BookModel.getAllBooks();

  return books;
};

const getBookById = async (id) => {
  const book = await BookModel.getBookById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }

  return { code: 200, book };
};

module.exports = {
  getAllBooks,
  getBookById,
};
