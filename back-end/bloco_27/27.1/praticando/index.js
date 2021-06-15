const express = require('express');
const app = express();

const port = 3000;

app.get('/books', async (req, res) => {});

app.listen(port, () => {
  console.log(`Pratice app listen on port ${port}`);
});
