// Retornando mes
const obj = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho', 
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]
const mes = (n) => {
  if(n == 0 || n > 12) return 'Esse mes nao existe cara'
  return obj[--n]
}
console.log(mes(13))

// Um mair q outro

const higher = (x, y) => {
  return (x === y) && true
}
console.log(higher(5, 0))

// Revert

const revert = (param) => {
  if(typeof param === 'boolean') return !param
  return -param

}

console.log(revert(3))

//