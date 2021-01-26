const fetch = require('node-fetch');
// const jsonfile = require('jsonfile');
const download = require('image-downloader');

/*
  Desafio:
  Deve fazer download e salvar todas as fotos dos itens listados.

  https://api.mercadolibre.com/sites/MLB/search?q=computador
*/

// Essa função salva a foto a partir de uma url
const salvaFoto = url => {
  const options = {
    url,
    dest: './data',
  };
  download
    .image(options)
    .then(({ filename }) => {
      console.log('Saved to', filename);
    })
    .catch(err => console.error(err));
};

const desafio = async () => {
  //
};

desafio();
