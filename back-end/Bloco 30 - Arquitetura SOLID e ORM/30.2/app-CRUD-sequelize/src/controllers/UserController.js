const User = require('../models/UserModel');

const index = async (_req, res) => {
  const user = await User.findAll();
  return res.send(200).json(user);
};

module.exports = {
  index,
};
