const SongModel = require('../models/songModel');

const findAllSongs = async () => {
  const songs = await SongModel.findAll();

  return songs;
};

const findSongById = async (id) => {
  const song = await SongModel.findById(id);

  return song;
};

const create = async (name, album) => {
  const findedSong = await SongModel.findByNameAlbum(name, album);
  if (findedSong) return false;

  const newSong = await SongModel.createNewSong(name, album);
  return newSong;
};

module.exports = {
  findAllSongs,
  create,
  findSongById,
};
