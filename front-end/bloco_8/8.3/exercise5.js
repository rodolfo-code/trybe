
const assert = require('assert');

const { count } = require("console");

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((sumSplit, caracter) => {
      return caracter === 'a' || caracter === 'A'? sumSplit + 1 : sumSplit
  },0)
}, 0)
}
assert.deepStrictEqual(containsA(), 20);