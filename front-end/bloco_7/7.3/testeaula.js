const unitTest = require("assert");
const { error } = require("console");

const sum = (number) => {
  if (typeof(number) !== 'number') {
    throw Error("Valor deve ser número!");
  } else {
    let summation = 0;
    for (index = 1; index <= number; index += 1) {
      summation += index;
    }
    return summation;
  }
};


// typeof(sum) === 'function'

unitTest.strictEqual(
  typeof sum,
  "function",
  "O resultado esperado era function"
);
unitTest.strictEqual(sum(1), 1);
unitTest.strictEqual(sum(3), 6);
unitTest.strictEqual(sum(5), 15);
unitTest.strictEqual(sum(0), 0);
unitTest.throws(() => {
  sum("3");
});

console.log(sum(5));