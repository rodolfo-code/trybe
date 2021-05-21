const { readFile, writeFile } = require('fs/promises');
const { promisify } = require('util');

const simpsons = './simpsons.json';
const newFile = './simpsonFamily.json';

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

// Exercicio 3

async function alteraArquivo() {
  const filterDoc = await readFile(simpsons, 'utf8').then((result) =>
    JSON.parse(result).filter(
      (person) => person.id !== '10' && person.id !== '6',
    ),
  );

  const toString = JSON.stringify(filterDoc);

  const newDoc = await writeFile(simpsons, toString)
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });
  return newDoc;
}

alteraArquivo();

// Exercicio 4

async function createNewFile() {
  const filter = await readFile(simpsons, 'utf8').then((result) =>
    JSON.parse(result).filter((char) => char.id >= '1' && char.id <= '4'),
  );

  const newFile = './simpsonFamily.json';

  const result = await writeFile(newFile, JSON.stringify(filter))
    .then(() => console.log('Arquivo criado com sucesso!'))
    .catch((err) => {
      console.error(`Erro ao criar o arquivo: ${err.message}`);
    });
  return result;
}

createNewFile();

// Exercicio 5

async function addChar(newChar) {
  const read = await readFile(newFile, 'utf8').then((result) =>
    JSON.parse(result),
  );

  const notEqual = read.some((char) => char.id === newChar.id);

  if (!notEqual) {
    read.push(newChar);
  }

  const sortJson = await read.sort((a, b) => a.id - b.id);

  const add = await writeFile(newFile, JSON.stringify(sortJson))
    .then(() => console.log('Personagem adicionado com sucesso!'))
    .catch((err) =>
      console.error(`Erro ao adicionar personagem: ${err.message}`),
    );
  return add;
}

const newChar = { id: '8', name: 'Nelson Muntz' };

addChar(newChar);
