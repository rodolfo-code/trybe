// const User = require('../services/User');

const createUser = (connection, UserService) => (async (req, res, next) => {
  const { username, email, password, role } = req.body;

  const user = await UserService.createUser(connection, {
    username,
    email,
    password,
    role,
  });

  if (!user.ok) {
    return next(user.error);
  }

  res.status(200).json({
    message: 'Usuário criado com sucesso!',
    user: user.result,
  });
});

module.exports = {
  createUser,
};
