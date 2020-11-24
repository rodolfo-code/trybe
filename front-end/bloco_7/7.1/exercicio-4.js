function maiorPalavra (frase) {
  const divideFrase = frase.split(' ');
  let biggerWord = divideFrase[0];
  for (let index = 0; index < divideFrase.length; index += 1) {
    if (divideFrase[index].length > biggerWord.length) {
      biggerWord = divideFrase[index];
    }
  }
  return biggerWord
}

console.log(maiorPalavra('rodolfo vinicius paralelepipedo'))

// ou

const biggestWord = (frase) => {
  const divideFrase = frase.split(' ');
  let biggerWord = divideFrase[0];
  for (let index = 0; index < divideFrase.length; index += 1) {
    if (divideFrase[index].length > biggerWord.length) {
      biggerWord = divideFrase[index];
    }
  }
  return biggerWord
}
console.log(biggestWord('Aqui na trybe estou cada vez melhor'))
