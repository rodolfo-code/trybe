const fs = require('fs/promises');

function getSimpsons() {
  return fs
    .readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result));
}

// OU

// async function getSimpsons() {
//   const retorno = await fs.readFile('./simpsons.json', 'utf-8');
//   const resp = JSON.parse(retorno);
//   return resp;
// }

function setSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };
