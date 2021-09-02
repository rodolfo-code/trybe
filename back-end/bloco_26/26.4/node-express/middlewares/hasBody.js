module.exports = (req, res, next) => {
  const { id, title, author } = req.body;

  if (!title || title === '' || !author || author === '') {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};
