module.exports = {
  positivoNegativo: (num) => {
    if (num < 0) {
      return 'negativo';
    }
    if (num > 0) {
      return 'positivo';
    }
    if (typeof num !== 'number') {
      return 'o parâmetro deve ser um número';
    }

    return 'neutro';
  },
};
