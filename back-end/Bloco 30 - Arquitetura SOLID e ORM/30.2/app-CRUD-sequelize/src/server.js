const express = require('express');
const routes = require('./routes/Router');

const cookieParser = require('cookie-parser');
const cors = require('cors');

require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
