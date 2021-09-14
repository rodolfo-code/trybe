const express = require('express');

const BookService = require('../controllers/BookController');

const router = express.Router();

router.get('/books', BookService.getAllBooks);

router.get('/books/:id', BookService.getBookById);

module.exports = router;
