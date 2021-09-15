const express = require('express');

const AuthorController = require('../controllers/AuthorController');

const router = express.Router();

router.get('/authors', AuthorController.getAll);

router.get('/authors/:id', AuthorController.findById);

router.post('/authors', AuthorController.create);

module.exports = router;
