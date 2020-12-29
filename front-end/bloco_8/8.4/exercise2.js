const assert = require('assert')
const { Console } = require('console')

const sum = (...array) => {
  return array.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}


assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)
