const nameMiddleware = (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!first_name || typeof first_name !== 'string') {
    return res.status(400).send({ message: 'Campo firstName é obrigatório' });
  }
  if (!last_name || typeof last_name !== 'string') {
    return res.status(400).send({ message: 'Campo lastName é obrigatório' });
  }

  next();
};

module.exports = nameMiddleware;
