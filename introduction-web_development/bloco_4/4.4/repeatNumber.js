function maisRepetido(array) {
  let repeticoes = 0;
  let numRepetido = 0;
  let indexRepetido = 0;
  for(let index = 0; index < array.length; index += 1) {
    currNum = array[index]
    let repet = 0
    for(let j = 0; j < array.length; j += 1) {
      if(array[j] === currNum) {
        repet += 1
      }
    }
    if(repet > repeticoes) {
      repeticoes = repet
      numRepetido = array[index]
      indexRepetido = index
    }
  }
  return array[indexRepetido]
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))