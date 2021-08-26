const connection = require('./connection')

const insertUser = async (username, password) => {
  try {
    const db = await connection()
    const newUser = await db.collection('users').insertOne({username, password})
    // console.log(newUser)
    return newUser
  } catch (err) {
    return null
  }
}

const findUser = async (username) => {
  try {
    const db = await connection()
    return await db.collection('users').findOne({username})
  } catch (err) {
    return null
  }
}

module.exports = {
  insertUser,
  findUser
}