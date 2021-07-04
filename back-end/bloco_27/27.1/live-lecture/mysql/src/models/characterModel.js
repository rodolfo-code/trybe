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

async function createNewCharacter(name, cartoon) {
  const query = 'INSERT INTO characters (name, cartoon) VALUES (?, ?)';
  const [newCharacter] = await connection.execute(query, [name, cartoon]);

  const result = {
    id: newCharacter.insertId,
    name,
    cartoon,
  };
  return result;
}

async function updatedCharacter(id, name, cartoon) {
  const query = 'UPDATE characters SET name=?, cartoon=? WHERE id=?';
  await connection.execute(query, [name, cartoon, id]);

  const result = {
    id,
    name,
    cartoon,
  };
  return result;
}

async function deleteCharacter(id) {
  const [deletedChar] = await characterById(id);

  const query = 'DELETE FROM characters WHERE id=?';
  await connection.execute(query, [id]);

  return deletedChar;
}

module.exports = {
  getAllCharacters,
  characterById,
  createNewCharacter,
  updatedCharacter,
  deleteCharacter,
};
