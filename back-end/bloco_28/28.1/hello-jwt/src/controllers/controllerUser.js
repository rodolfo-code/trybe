const Services = require('../services/userService')


const createUser = async (req, res) => {
  const {username, password} = req.body

  if (!username || !password) {
    return res.status(401).json({message: 'usuario e senha obrigatorios'})
  }

  try {
    const newUser = await Services.createUser(username, password)

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
}

const login = async (req, res) => {
  const {username, password} = req.body

  if (!username || !password) {
    return res.status(401).json({message: 'usuario e senha obrigatorios'})
  }

  try {
    const login = await Services.login(username, password)

    return res.status(201).json(login);
 
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
}

module.exports = {
  createUser,
  login
}