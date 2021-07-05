const connection = require('./connection');
const { ObjectId, ObjectID } = require('mongodb');

async function getAllCharacters() {
  try {
    const db = await connection();
    const characters = await db.collection('characters').find({}).toArray();
    return characters;
  } catch (err) {
    return null;
  }
}

async function findById(id) {
  try {
    const db = await connection();
    const character = await db
      .collection('characters')
      .findOne({ _id: ObjectId(id) });
    return character;
  } catch (err) {
    return null;
  }
}

async function create(name, cartoon) {
  try {
    const db = await connection();
    const create = await db
      .collection('characters')
      .insertOne({ name, cartoon });
    return create.ops[0];
  } catch (err) {
    return null;
  }
}

async function deleteCharacter(id) {
  try {
    const db = await connection();
    const deleted = await db
      .collection('characters')
      .deleteOne({ _id: ObjectId(id) });
    return deleted;
  } catch (err) {
    return null;
  }
}

module.exports = {
  getAllCharacters,
  findById,
  create,
  deleteCharacter,
};
