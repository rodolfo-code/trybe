const userModel = require('../models/userModel');

const jwt = require('jsonwebtoken')

const SECRET = 'segredinhosecreto'
const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const findByCredentials = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário usuário e senha para fazer login' }
  );

  const userSearch = await userModel.findByUsername(username);

  if (!userSearch || userSearch.password !== password) return (
    { status: 401, message: 'Usuário não existe ou senha inválida' }
  );

  const {password: _, ...payload} = userSearch

  const token = jwt.sign(payload, SECRET, jwtConfig)

 
  return ({ status: 200, message: 'Login efetuado com sucesso', token })
};

const create = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  await userModel.create(username, password);

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { 
  findByCredentials, 
  create 
};