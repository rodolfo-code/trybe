const { expect } = require('chai');
const { positivoNegativo } = require('../positivoNegativo');

describe('Funçao identifica numero positivo e negativo', () => {
  describe('a resposta for maior que 0', () => {
    describe('a resposta é', () => {
      it('uma string', () => {
        const resultado = positivoNegativo(10);

        expect(resultado).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resultado = positivoNegativo(10);
        expect(resultado).to.be.equal('positivo');
      });
    });
  });

  describe('a resposta for menor que 0', () => {
    describe('a resposta é', () => {
      it('uma string', () => {
        const resultado = positivoNegativo(-10);
        expect(resultado).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resultado = positivoNegativo(-10);
        expect(resultado).to.be.equal('negativo');
      });
    });
  });

  describe('a respsta for igual a 0', () => {
    describe('a resposta é', () => {
      it('uma string', () => {
        const resultado = positivoNegativo(0);
        expect(resultado).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resultado = positivoNegativo(0);
        expect(resultado).to.be.equal('neutro');
      });
    });
  });
});

describe('Quando parametro passado não é do tipo "number"', () => {
  describe('a resposta', () => {
    it('é uma string', () => {
      const resultado = positivoNegativo('rodolfo');

      expect(resultado).to.be.a('string');
    });

    it('é igual a "o parâmetro deve ser um número"', () => {
      const resultado = positivoNegativo('rodolfo');

      expect(resultado).to.be.equal('o parâmetro deve ser um número');
    });
  });
});
