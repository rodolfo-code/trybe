function calculaSituacao(media) {
  if (media > 7 || media === 7) {
    return 'aprovado';
  }

  if (media > 10) {
    return 'média inválida';
  }

  return 'reprovado';
}

module.exports = calculaSituacao;
