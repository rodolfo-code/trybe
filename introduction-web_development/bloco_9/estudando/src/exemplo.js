const fetch = require('node-fetch');
const jsonfile = require('jsonfile');

/*
  Exemplo de como usar...
*/

const exemplo = async () => {
  await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then(response => response.json())
    .then(data => {
      jsonfile.writeFile('./data/dados.json', data);
    });
};

exemplo();
