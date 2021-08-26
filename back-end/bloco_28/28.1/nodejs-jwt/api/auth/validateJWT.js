const jwt = require('jsonwebtoken')
const model = require('../../models/user')

const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization
  // console.log(token)

  if (!token) {
    return res.status(401).json({error: 'Token não encontrado'})
  }
  try {
    const decoded = jwt.verify(token, segredo)
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          _id: '5e54590ba49448f7e5fa73c0',
          username: 'italssodj',
          password: 'senha123'
        },
        iat: 1582587327,
        exp: 1584774714908
      }
    */
   console.log(decoded)
   const user = await model.findUser(decoded.username)

   if (!user) {
     return res.status(401).json({message: 'Erro ao encontrar usuario do token'})
   }

   const {password: _, ...userWithoutPassword} = user

   req.user = userWithoutPassword;
   next()
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}