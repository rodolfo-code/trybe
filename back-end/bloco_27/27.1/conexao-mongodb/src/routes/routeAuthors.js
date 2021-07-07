const express = require('express');

const AuthorController = require('../controllers/authorController');

const router = express.Router();

router.get('/', AuthorController.getAllAuthors);
router.get('/:id', AuthorController.findAuthorById);
router.post('/', AuthorController.createAuthor);

module.exports = router;
