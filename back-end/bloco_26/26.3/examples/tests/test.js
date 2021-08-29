const { expect } = require('chai');

const calculaSituacao = require('../src/index');

describe('Quando média for menor que 7', () => {
  it('retorna  "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(8);

    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovado');
  });
});
