const AuthorModel = require('../models/Author');
const authorSchema = require('../schemas/authorSchema');

const getNewAuthor = ({ _id: id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  const { error } = authorSchema.validate({
    firstName,
    middleName,
    lastName,
  });

  if (error) return false;

  return true;
};

const getAll = async () => {
  const authors = await AuthorModel.getAllAuthors();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await AuthorModel.getById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }

  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const validData = isValid(firstName, middleName, lastName);
  if (!validData) return false;

  const existingAuthor = await AuthorModel.findByName(
    firstName,
    middleName,
    lastName,
  );

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }
  const created = await AuthorModel.create(firstName, middleName, lastName);

  return created;
};

module.exports = {
  getAll,
  findById,
  create,
};
