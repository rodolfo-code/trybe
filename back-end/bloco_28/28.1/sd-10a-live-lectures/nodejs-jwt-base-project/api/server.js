const express = require('express');
const bodyParser = require('body-parser');
const postsController = require('../controllers/postsController');
const usersController = require('../controllers/usersController');
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middlewares/authMiddleware');


const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', authMiddleware, postsController);
app.post('/api/users', usersController);
app.post('/api/login', loginController);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
