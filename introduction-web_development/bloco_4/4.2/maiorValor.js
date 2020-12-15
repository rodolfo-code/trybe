let numbers = [100, 9, 3, 19, 70, 8, 5, 2, 35, 27];

let maiorValor = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > maiorValor) {
        maiorValor = numbers[i]
    }
}

console.log(maiorValor);

// Codigo refatorado

const higherValue = (arr) => arr.reduce((acc, curr) => acc < curr? acc = curr: acc)

console.log(higherValue(numbers))
