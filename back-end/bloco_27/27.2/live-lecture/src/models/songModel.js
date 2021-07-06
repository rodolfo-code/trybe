const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function findAll() {
  const db = await connection();
  const songs = await db.collection('songs').find().toArray();
  return songs;
}

async function createNewSong(name, album) {
  const db = await connection();
  await db.collection('songs').insertOne({ name, album });
  return {
    name,
    album,
  };
}

async function findById(id) {
  if (!ObjectId(id)) return null;

  const db = await connection();
  const song = await db.collection('songs').findOne({ _id: ObjectId(id) });
  return song;
}

module.exports = {
  findAll,
  createNewSong,
  findById,
};
