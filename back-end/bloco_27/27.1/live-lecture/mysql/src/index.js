const express = require('express');
const characters = require('./routes/RouteCharacters');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/characters', characters);

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
