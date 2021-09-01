const fs = require('fs').promises;
const DIRETORIO = './books.json';

module.exports = async () => {
  const books = await fs.readFile(DIRETORIO, 'utf-8');
  return JSON.parse(books);
};
