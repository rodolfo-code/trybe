const Books = require('../models/Books');

const newBookValidation = async (req, res, next) => {
  const { title, author_id } = req.body;

  if (!title || title.length < 3 || typeof title !== 'string') {
    return res.status(400).send({ message: 'Dados inválidos' });
  }

  const hasAuthorId = await Books.getByAuthorId(author_id);

  if (hasAuthorId.length === 0 || typeof author_id !== 'number') {
    return res.status(400).send(hasAuthorId);
  }
  next();
};

module.exports = newBookValidation;
