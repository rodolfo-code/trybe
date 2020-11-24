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

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))

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
console.log(biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

// ou

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))