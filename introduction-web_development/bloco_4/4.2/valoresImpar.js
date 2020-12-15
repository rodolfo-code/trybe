let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        impar += 1
    }
}

if(impar == 0) {
    console.log('Nenhum número ímpar encontrado');
} else {
    console.log(impar)
}


// Codigo refatorado


const odd = (arr) => {
    const result = arr.filter((curr) => curr % 2 !== 0).length
    result > 0? console.log(result): console.log('Nenhum número ímpar encontrado')
}
odd(numbers)
