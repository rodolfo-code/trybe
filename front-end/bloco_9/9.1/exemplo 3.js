const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2) => {
  resultadoFinal(num1 + num2);
}

funcSoma(10, 20)

// OU

const funcSom = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma)
}

funcSom(20, 30, resultadoFinal)