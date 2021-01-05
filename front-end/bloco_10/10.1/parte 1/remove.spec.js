const myRemove = require('./remove');

describe('myRemove', () => {
  it('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3)
  })
  it('returns an array other than [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});