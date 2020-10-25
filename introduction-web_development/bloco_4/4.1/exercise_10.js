let custo = 100;
let venda = 200;
let imposto = (20/100) * custo

let custoTotal = custo + imposto;
let lucro = (venda - custoTotal) * 1000;

if (custo < 0 || venda < 0) {
    console.log("erro, informe valores diferentes de 0")
} else {
    console.log(lucro)
}

/* ou */

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
