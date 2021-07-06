// Controllers

const SongModel = require('../models/songModel');

const findAllSongs = async (_req, res, _next) => {
  const songs = await SongModel.findAll();

  return res.status(200).json(songs);
};

const createNewSong = async (req, res) => {
  const { name, album } = req.body;

  const newSong = await SongModel.createNewSong(name, album);
  return res.status(200).json(newSong);
};

const findOneSong = async (req, res, _next) => {
  const { id } = req.params;
  const song = await SongModel.findById(id);

  return res.status(200).json(song);
};

module.exports = {
  findAllSongs,
  createNewSong,
  findOneSong,
};
