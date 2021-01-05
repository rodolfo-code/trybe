const sum = require('./soma');

describe('SUM', () => {
  it('4 mais 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('0 + 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('lança um erro quando os parametros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Teste se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => { sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
});
