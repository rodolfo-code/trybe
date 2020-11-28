const assert = require('assert');

const str1 = 'rodolfo';
const str2 = 'vinicius';

const sumStr = (str1, str2) => `${str1} ${str2}`;

const expected =  sumStr(str1, str2);

assert.equal(expected, 'rodolfo vinicius', 'Erro: reescreva essa bagaça' );