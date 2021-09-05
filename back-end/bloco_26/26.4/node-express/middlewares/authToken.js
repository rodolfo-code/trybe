module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token !== 'secret') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};
