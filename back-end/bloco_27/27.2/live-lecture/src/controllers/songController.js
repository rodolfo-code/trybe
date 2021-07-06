// Controllers

const SongService = require('../services/songServices');

const findAllSongs = async (_req, res, _next) => {
  const songs = await SongService.findAllSongs();

  return res.status(200).json(songs);
};

const findOneSong = async (req, res, _next) => {
  const { id } = req.params;
  const song = await SongService.findSongById(id);

  return res.status(200).json(song);
};

const createNewSong = async (req, res) => {
  const { name, album } = req.body;
  const newSong = await SongService.create(name, album);

  if (!newSong) {
    return res.status(400).json({ message: 'Musica já cadastrada' });
  }

  return res.status(200).json(newSong);
};

module.exports = {
  findAllSongs,
  createNewSong,
  findOneSong,
};
