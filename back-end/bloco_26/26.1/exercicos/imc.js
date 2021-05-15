const { question, questionInt, questionFloat } = require("readline-sync");

const PESO_KG = questionInt("Qual seu peso? ");
const ALTURA_M_CM = questionFloat("Qual sua altura? ");

function calculaImc() {
  const peso = PESO_KG;
  const altura = ALTURA_M_CM;

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  const resultado = "";

  if (imc < 18.5) {
    return console.log("Abaixo do peso (magreza)");
  } else if (imc >= 18.5 || imc <= 24.9) {
    return console.log("Peso normal");
  } else if (imc >= 25 || imc <= 29.9) {
    return console.log("Acima do peso (sobrepeso)");
  } else if (imc >= 30 || imc <= 34.9) {
    return console.log("Obesidade grau I ");
  } else if (imc >= 35 || imc <= 39.9) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade graus III e IV ");
  }

  console.log("IMC: %s", imc);
  console.log(resultado);
}

calculaImc();
