const fs = require('fs').promises;
const { expect } = require('chai');
const sinon = require('sinon');
const { readFile } = require('../readFile');

const FILE_CONTENT = 'Rodolfo Vinicius';

describe('Funçao readFile', () => {
  describe('quando o arquivo é lido com sucesso', () => {
    before(() => {
      sinon.stub(fs, 'readFile').resolves(FILE_CONTENT);
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('a resposta', () => {
      it('é uma string', async () => {
        const result = await readFile('./meuArquivo.txt');

        expect(result).to.be.a('string');
      });

      it('é igual o conteúdo do arquivo', async () => {
        const result = await readFile('./meuArquivo.txt');

        expect(result).to.be.equal(FILE_CONTENT);
      });
    });
  });
  describe('quando ocorre algum erro na leitura do arquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFile').rejects();
    });

    after(() => {
      fs.readFile.restore();
    });
    describe('a resposta', () => {
      it('é igual a "null"', async () => {
        const result = await readFile('./meuArquiv.txt');

        expect(result).to.be.equal(null);
      });
    });
  });
});
