
function fatorial(numero) {
  let fatorialN = 1;
  if (numero === 0){
    return 1;
  }
  for (let index = 1; index <= numero; index += 1) {
    fatorialN *= index;
  }
  return fatorialN;
}
console.log(fatorial(5))

// ou

const factorial = (n) => {
  if(n === 0) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n - 1)
  }
  return n
}

console.log(factorial(5))

// ou

const fact = n => n <= 1 ? 1 : n * fact(n - 1)

console.log(fact(4))