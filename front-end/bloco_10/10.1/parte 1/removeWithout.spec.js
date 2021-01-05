const myRemoveWithoutCopy = require('./removeWithout');

describe('myRemoveWithoutCopy', () => {
  it('returns an expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  
})