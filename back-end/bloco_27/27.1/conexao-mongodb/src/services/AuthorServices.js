const Author = require('../models/Authors');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
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

const isValid = (firstName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();
  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

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

const createNewAuthor = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);

  const hasAuthor = await Author.findByName(firstName, middleName, lastName);

  if (!authorValid) return false;

  if (hasAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome',
      },
    };
  }

  const { insertedId } = await Author.create(firstName, middleName, lastName);
  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  createNewAuthor,
};
