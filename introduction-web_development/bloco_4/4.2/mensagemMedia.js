let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0;
let media = 0;

for(let i = 0; i < numbers.length; i = i + 1) {
    soma = soma + numbers[i];
    media = soma / numbers.length
};

if(media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menos ou igual a 20")
};
