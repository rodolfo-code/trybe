//  const fetch = require('node-fetch');
//  const jsonfile = require('jsonfile');

const computer = (computador) => {
  let ol = document.querySelector('ol')
  let li = document.createElement('li')
  li.innerHTML = computador
  ol.appendChild(li)
  console.log(ol)
}

//computer()
/*
  Desafio:
  Retornar um array contendo o titulo de todos os
  computadores cujo titulo contenha a palavra Intel.

  https://api.mercadolibre.com/sites/MLB/search?q=computador
*/

const desafio = async () => {
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((response) => {response.json()
      .then((data) => data.results.map(title => computer(title.title)))
    })    
};

window.onload = desafio();