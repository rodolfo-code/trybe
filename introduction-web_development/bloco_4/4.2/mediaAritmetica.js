let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0;
let media = 0;

for(let i = 0; i < numbers.length; i = i + 1) {
    soma = soma + numbers[i];
    media = soma / numbers.length
}

console.log(`A media entre todos os elementos do array numbers é ${media}`)

// Codigo refatorado

const average = (arr) => arr.reduce((acc, curr) => acc + curr)/ arr.length

console.log(`A media entre todos os elementos do array numbers é ${average(numbers)}`)