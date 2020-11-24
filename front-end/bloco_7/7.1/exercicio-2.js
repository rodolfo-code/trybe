const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortFunction = (a, b) => a - b;

const sortArray = oddsAndEvens.sort(sortFunction);
console.log(`Os números ${sortArray} se encontram ordenados de forma crescente!`);