const fetch = require('node-fetch');
const jsonfile = require('jsonfile');
// const download = require('image-downloader');

console.clear();

const desafio = async () => {
  await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then(response => response.json())
    .then(data => data.results)
    // .then(data => data.flat())
    .then(data => {
      jsonfile.writeFile('./data/base.json', data);
    });
};

desafio();
