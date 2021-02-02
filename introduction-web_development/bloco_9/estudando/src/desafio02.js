// const fetch = require('node-fetch');
// const jsonfile = require('jsonfile');

const computer = (computador, price) => {
  let ol = document.querySelector('ol')
  let li = document.createElement('li')
  li.innerHTML = `${computador}, ${price}`
  ol.appendChild(li)
  console.log(ol)
}

/*
  Desafio:
  Retornar um array contendo o titulo, preço, cujo o produto
  esteja em São Paulo.

  https://api.mercadolibre.com/sites/MLB/search?q=computador
*/



const desafio = async () => {
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((response) => {response.json()
      .then(data => data.results.filter((state) => {
        state.address.state_name === "São Paulo" && computer(state.title, state.price)
      }))
    })

};

desafio();
  

window.onload = function onload() {
  computer();
}
