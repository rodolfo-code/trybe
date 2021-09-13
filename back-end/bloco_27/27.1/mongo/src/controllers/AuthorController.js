const rescue = require('express-rescue');

const AuthorService = require('../services/serviceAuthor');

const getAll = rescue(async (req, res) => {
  const authors = await AuthorService.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const author = await AuthorService.findById(id);
  // console.log(author.error);

  if (author.error) {
    return next(author.error);
  }

  res.status(200).json(author);
});

const create = rescue(async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await AuthorService.create(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  if (!newAuthor) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  res.status(200).json(newAuthor);
});

module.exports = {
  getAll,
  findById,
  create,
};
