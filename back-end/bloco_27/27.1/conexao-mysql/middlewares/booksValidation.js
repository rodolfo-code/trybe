const Author = require('../models/Author');

const bookMiddleware = async (req, res, next) => {
  const { id, title, author_id } = req.body;

  if (!title || typeof title !== 'string' || title.length < 3) {
    return res.status(400).send({ message: 'Title inválido ou não existe' });
  }

  // const hasAuthorId = ;

  if (!(await Author.findById(author_id))) {
    return res
      .status(400)
      .send({ message: 'Author_id inválido ou não existe' });
  }
  next();
};

module.exports = bookMiddleware;
