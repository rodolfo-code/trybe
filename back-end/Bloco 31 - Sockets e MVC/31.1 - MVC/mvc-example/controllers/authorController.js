const Author = require('../models/authorModel');

const listAuthors = async (req, res) => {
  const authors = await Author.findAllAuthors()
  console.log(authors)

  res.status(200).render('Author/Index', { authors })
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  
  if (!author) return res.status(404).render('404');

  res.status(200).render('Author/Show', { author });
};

const newAuthor = (req, res) => {
  res.render('Author/New', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.render('Author/New', { message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor
}