// Seu código aqui
const lista = require('./lista.json');

const somatorio = () => {
  const prices = lista.map((object) => object.price.split('')
    .filter((e) => (Number(e))).join(''))
    .reduce((acc, cur) => acc + (parseFloat(cur, 10)), 0);

  return prices;
};

console.log(somatorio());
