const rescue = require('express-rescue');
const { required } = require('joi');
const Joi = require('joi');

const AuthorServices = require('../services/AuthorServices');

const getAllAuthors = rescue(async (req, res) => {
  const authors = await AuthorServices.getAll();

  if (!authors) {
    return res.status(404).send({ message: 'Dados não encontrados' });
  }

  return res.status(201).send(authors);
});

const findAuthorById = rescue(async (req, res) => {
  const { id } = req.params;

  const author = await AuthorServices.findById(id);

  if (author.error) {
    return next(author.error);
  }

  return res.status(201).send(author);
});

const createAuthor = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    middleName: Joi.string().not().empty(),
    lastName: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) {
    return next(error);
  }

  const { firstName, middleName, lastName } = req.body;

  const author = await AuthorServices.createNewAuthor(
    firstName,
    middleName,
    lastName,
  );

  if (author.error) {
    return res.status(400).json(author.error);
  }

  // if (!author) {
  //   ;
  // }

  res.status(201).send(author);
});

module.exports = {
  getAllAuthors,
  findAuthorById,
  createAuthor,
};
