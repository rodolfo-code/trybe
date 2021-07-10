const express = require('express');
// const newBookValidation = require('../middlewares/newBookValidation');

const Books = require('../controllers/bookController');

const router = express.Router();

router.get('/', Books.getAll);
router.get('/:id', Books.findById);
router.post('/', Books.create);

module.exports = router;
