const auxFunction = require('../utils');

module.exports = async (req, res, next) => {
  const { id } = req.body;
  const books = await auxFunction();
  console.log(books);

  const existId = books.some((item) => item.id == id);

  if (existId) {
    return res.json({ message: 'id ja existe' });
  }

  next();
};
