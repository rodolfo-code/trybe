const { question, questionInt, questionFloat } = require("readline-sync");

const PESO_KG = questionInt("Qual seu peso? ");
const ALTURA_M_CM = questionFloat("Qual sua altura? ");

function calculaImc() {
  const peso = PESO_KG;
  const altura = ALTURA_M_CM;
  console.log(peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log("IMC: %s", imc);
}

calculaImc();
