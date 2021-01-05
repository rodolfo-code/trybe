function trocaPorX (string) {
  const parametro = 'Bebeto'
  return string.replace('x', `${parametro}`)

}

console.log(trocaPorX('Trybe x aqui'))

// ou

// const skills = ['empatia', 'resiliência', 'vontade de aprender', 'criatividade']

const trocaX = (string, novaPalavra) => string.replace('x', `${novaPalavra}`)

console.log(trocaX('Trybe x aqui.', 'Rodolfo'))

