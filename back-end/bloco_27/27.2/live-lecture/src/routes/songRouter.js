const express = require('express');

const SongController = require('../controllers/songController');

const router = express.Router();

router.get('/', SongController.findAllSongs);
router.get('/:id', SongController.findOneSong);
router.post('/', SongController.createNewSong);

module.exports = router;
