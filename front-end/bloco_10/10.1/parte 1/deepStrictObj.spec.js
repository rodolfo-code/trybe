const arrayOfObjects = require('./deepStrictObj');

describe('arrayOfObjects', () => {
  it('comparing objects', () => {
  expect(arrayOfObjects[0]).toEqual(arrayOfObjects[1]);
  });
  it('comparing objects', () => {
    expect(arrayOfObjects[0]).not.toEqual(arrayOfObjects[2]);
  });
});
