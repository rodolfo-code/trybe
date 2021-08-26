const jwt = require('jsonwebtoken')

const User = require('../models/user');

const secret = 'seusecretdetoken'

module.exports = async (req, res) => {
  try {
  // const {username, password} = req.body.username;
  // const password = req.body.password;

  if (!req.body.username || !req.body.password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(req.body.username);

  if (!user || user.password !== req.body.password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  const jwtConfig = {
    expiresIn: '20m',
    algorithm: 'HS256'
  }
  const {password: _, ...userData} = user
  // console.log(userData)

  const token = jwt.sign(userData, secret, jwtConfig)

  return res.status(200).json({token});
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
