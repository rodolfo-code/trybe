module.exports = (req, res, next) => {
  const { id, title, author } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Id cannot be blank' });
  }

  if (!title) {
    return res.status(401).json({ message: 'Title cannot be blank' });
  }

  if (!author) {
    return res.status(401).json({ message: 'Author cannot be blank' });
  }

  next();
};
