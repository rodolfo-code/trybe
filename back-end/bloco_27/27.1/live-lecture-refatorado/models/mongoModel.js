const connection = require('./connection');
const { ObjectID, ObjectId } = require('mongodb');
const router = require('../routers/charactersRouter');

async function getAll() {
  const rows = connection.then((db) =>
    db.collection('characters').find().toArray(),
  );
  return rows;
}

async function newCharacter(newChar) {
  connection
    .then((db) => db.collection('characters').insertOne({ ...newChar }))
    .then((result) => result.ops[0]);
}

async function getById(id) {
  if (!ObjectId.isValid(id)) return null;

  const rows = connection.then((db) =>
    db.collection('characters').findOne({ _id: ObjectID(id) }),
  );

  return rows;
}

async function updateChar(id, newData) {
  const rows = connection.then((db) =>
    db
      .collection('characters')
      .updateOne({ _id: ObjectID(id) }, { $set: { ...newData } })
      .then(() => ({ _id: id, ...newData })),
  );
  return rows;
}

async function deleteChar(id) {
  if (!ObjectId.isValid(id)) return null;
  return connection.then((db) =>
    db.collection('characters').deleteOne({ _id: ObjectID(id) }),
  );
}

module.exports = { getAll, newCharacter, getById, updateChar, deleteChar };
