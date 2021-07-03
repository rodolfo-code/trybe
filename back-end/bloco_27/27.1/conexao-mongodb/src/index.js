const express = require('express');

const authors = require('./routes/routeAuthors');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/authors', authors);

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
