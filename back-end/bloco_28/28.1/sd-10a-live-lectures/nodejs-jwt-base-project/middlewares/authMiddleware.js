const jwt = require('jsonwebtoken')

const userModel = require('../models/userModel')

const SECRET = 'segredinhosecreto'

module.exports = async (req, res, next) => {
  try {
  const token = req.headers.authorization;

  const payload = jwt.verify(token, SECRET)

  const user = await userModel.findByUsername(payload.username)

  const {_id, username} = user

  req.user = {_id, username}

  next()
  } catch (err) {
    res.status(401).json({message: 'Invalid token'})
  }
  
}