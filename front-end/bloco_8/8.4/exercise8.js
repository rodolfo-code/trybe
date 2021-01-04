const assert = require('assert')

const greet = (person, greet = 'Hi') => `${greet} ${person}`

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")
