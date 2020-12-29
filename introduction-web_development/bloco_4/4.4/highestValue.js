
const highestValue = (arr) => arr.reduce((acc, curr, index, array) => curr > array[acc]? acc = array.indexOf(curr): acc, 0);

console.log(highestValue([2, 4, 6, 7, 10, 0, -3]))