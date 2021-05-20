const { readFile } = require('fs/promises');
const { promisify } = require('util');

const simpsons = './simpsons.json';

const readPromisificado = promisify(readFile);

// Exercicio 1

readPromisificado(simpsons, 'utf8')
  .then((result) =>
    JSON.parse(result).map((person) =>
      console.log(`${person.id} - ${person.name}`),
    ),
  )
  .catch((err) => console.error(err));

// Exercicio 2

async function searchById(id) {
  const result = await readFile(simpsons, 'utf8').then((result) =>
    JSON.parse(result),
  );
  const arr = result.find((item) => item.id === id);
  if (!arr) {
    throw new Error('id não encontrado');
  }
  console.log(arr);
  return arr;
}

searchById('2');
