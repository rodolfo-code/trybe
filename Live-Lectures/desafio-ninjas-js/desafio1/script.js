// Seu código aqui

const fetchProduto = () => {
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((response) => response.json())
    .then((data) => data.results
      .filter((product) => product.title.match(/intel/i))
      .forEach((element) => {
        const item = document.createElement('li');
        item.innerText = element.title;
        document.getElementById('main')
          .appendChild(item);
      }));
};

// const ul = document.getElementsByTagName('ul');
// const list = document.createElement('li');
// list.innerHTML = 'Rodolfo';
// ul.appendChild = list;
// const products = fetchProduto();
// const li = document.createElement('li');

fetchProduto();
