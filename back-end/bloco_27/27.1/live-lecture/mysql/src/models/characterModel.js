const connection = require('./connection');

async function getAllCharacters() {
  const query = 'SELECT * FROM cartoons.characters';

  const characters = connection.execute(query);
  return characters;
}

async function characterById(id) {
  const query = 'SELECT * FROM characters WHERE id=?';

  const character = await connection.execute(query, [id]);
  return character;
}

module.exports = { getAllCharacters, characterById };
