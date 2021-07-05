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
    // if (!ObjectId(id)) return null;

    const db = await connection();
    const character = await db
      .collection('characters')
      .findOne({ _id: ObjectId(id) });
    return character;
  } catch (err) {
    return null;
  }
}

const create = (name, cartoon) => {
  const createdCharacter = connection()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => result.ops[0]);

  return createdCharacter;
};

module.exports = {
  getAllCharacters,
  findById,
  create,
};
