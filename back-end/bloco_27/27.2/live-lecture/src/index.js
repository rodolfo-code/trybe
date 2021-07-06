const express = require('express');

const songs = require('./routes/songRouter');

const app = express();
app.use(express.json());
const PORT = 3000;

app.use('/songs', songs);

app.listen(PORT, () => {
  console.log(`Example listening on port ${PORT}`);
});
