const consoleSoma = (parametro) => {
  console.log(parametro)
}

const soma = (num1, num2, callback) => {
  let result = num1 + num2;
  callback(result)
}

soma()