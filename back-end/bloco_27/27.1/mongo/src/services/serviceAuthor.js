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

  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const validData = isValid(firstName, middleName, lastName);

  if (!validData) return false;

  const { insertedId } = await AuthorModel.create(
    firstName,
    middleName,
    lastName,
  );

  return {
    id: insertedId,
    firstName,
    middleName,
    lastName,
  };
};

module.exports = {
  getAll,
  findById,
  create,
};
