const jwt = require('jsonwebtoken');

const { insertUser, findUser } = require("../models/userModel");

const secret = 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256'
}

const createUser = async (username, password) => {
    const newUser = await insertUser(username, password)

    if (!newUser) throw Error

    return { message: 'Novo usuário criado com sucesso', user: username }
}

const login = async (username, password) => {
  const user = await findUser(username)

  if(!user || user.password !== password) {
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' })
  }

  const {password: _, ...userWithoutPassword} = user

  const token = jwt.sign(userWithoutPassword, secret, jwtConfig)

  return ({token});
}

module.exports = {createUser, login}