const unitTest = require('assert');

const sum = (number) => {
  let summation = 0;
  for(index = 1; index <= number; index += 1) {
    summation += index;
  }
  return summation
};

// console.log(sum(9));

// typeof(sum) === 'function'

unitTest.strictEqual(typeof(sum), 'function', 'O resultado esperado era function')
unitTest.strictEqual(sum(1), 1);
unitTest.strictEqual(sum(3), 6);
unitTest.strictEqual(sum(5), 15);