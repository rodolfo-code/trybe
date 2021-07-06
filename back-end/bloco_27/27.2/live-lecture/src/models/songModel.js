const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function findAll() {
  const db = await connection();
  const songs = await db.collection('songs').find().toArray();
  return songs;
}

async function findById(id) {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const song = await db.collection('songs').findOne({ _id: ObjectId(id) });
  return song;
}

async function findByNameAlbum(name, album) {
  const db = await connection();
  return await db.collection('songs').findOne({ name, album });
}

async function createNewSong(name, album) {
  const db = await connection();
  const newSong = await db.collection('songs').insertOne({ name, album });
  const result = await newSong.ops[0];
  console.log(result);
  return {
    id: result._id,
    name: result.name,
    album: result.album,
  };
}

module.exports = {
  findAll,
  createNewSong,
  findById,
  findByNameAlbum,
};
