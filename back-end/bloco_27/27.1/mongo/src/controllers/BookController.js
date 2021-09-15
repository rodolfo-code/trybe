const rescue = require('express-rescue');

const BookService = require('../services/BookService');

const getAllBooks = rescue(async (req, res) => {
  const books = await BookService.getAllBooks();

  res.status(200).json(books);
});

const getBookById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const { book, code, error } = await BookService.getBookById(id);

  if (error) {
    return next(error);
  }

  res.status(code).json(book);
});

module.exports = {
  getAllBooks,
  getBookById,
};
