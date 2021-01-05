// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// };

// assert.strictEqual(division(10, 2), 5); // OK
// assert.strictEqual(division(10, 0), 0); // 💣

// tornando a função mais robusta

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK