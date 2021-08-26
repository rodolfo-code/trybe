const express = require('express')

const router = express.Router();
const ControllerUser = require('../controllers/controllerUser')

// router.post('/login', )
router.post('/users', ControllerUser.createUser)
router.post('/login', ControllerUser.login)

module.exports = router