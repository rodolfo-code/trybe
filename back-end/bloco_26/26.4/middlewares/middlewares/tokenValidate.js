module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  const tokenRegex = /^[a-zA-Z0-9]{12}$/;
  const isValid = tokenRegex.test(token);

  if (!token || !isValid) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
};
