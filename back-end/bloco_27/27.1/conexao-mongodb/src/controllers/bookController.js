const Joi = require('joi');
const rescue = require('express-rescue');

const Books = require('../services/BookService');

const getAll = rescue(async (_req, res) => {
  // const id = req.query.id;
  // const book = id ? await Books.getById(id) : await Books.getAll();
  const books = await Books.getAll();

  return res.status(201).json(book);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;

  const books = await Books.getById(id);

  if (book.error) return next(book.error);

  return res.status(201).json(books);
});

const create = rescue(async (req, res) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { title, author_id } = req.body;
  const newBook = await Books.create(title, author_id);

  if (newBook.error) return next(newBook.error);

  res.status(201).json(newBook);
});

module.exports = {
  getAll,
  findById,
  create,
};
