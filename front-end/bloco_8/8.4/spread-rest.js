const point = [1.0, 2.2, -6.6, 19]
const otherPoint = [0.1, 3.5, -99.6]

printPoint = (x, y, z) => `Point cordinates are x = ${x}, y = ${y}, z = ${z}`

console.log(printPoint(...point))

// exercicio 2


const assert = require('assert');

const formatDate = (year, month, day, hour, minute, second) => {
  return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
};

const dateInfo = ['1981', '7', '31', '22', '47', '12']

// TESTE
const expectedValue = '31/7/1981 - 22:47:12'
assert.strictEqual(formatDate(...dateInfo), expectedValue)