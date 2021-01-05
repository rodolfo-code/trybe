const myRemove = require('./remove');

describe('myRemove', () => {
  it('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3)
  })
});