const data = require('./data.json');

// seu código aqui
const result = () => {
  // eslint-disable-next-line no-restricted-globals
  const price = data[2][1].b[0].split(' ');
  return price[price.length - 1];
};

console.log(result());
