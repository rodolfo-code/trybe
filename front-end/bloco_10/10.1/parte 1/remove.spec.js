const myRemove = require('./remove');

describe('myRemove', () => {
  it('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3)
  })
  it('returns an array other than [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('do not change passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  it('return a expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});