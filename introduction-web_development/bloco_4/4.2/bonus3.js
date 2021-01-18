let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const multiply = (arr) => arr.map((element, index, array) => 
(element === arr[arr.length - 1]? element * 2: element * array[index + 1]))
console.log(multiply(numbers))
