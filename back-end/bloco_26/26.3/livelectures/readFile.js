const fs = require('fs').promises;

// const fileName = './meuArquivo.txt';

module.exports = {
  readFile: async (fileName) => {
    try {
      const fileContent = await fs.readFile(fileName, 'utf-8');
      return fileContent;
    } catch (error) {
      return null;
    }
  },
};
