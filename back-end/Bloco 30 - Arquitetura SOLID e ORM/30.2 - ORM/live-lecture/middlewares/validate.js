module.exports = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) return next(error);

  next();
};
