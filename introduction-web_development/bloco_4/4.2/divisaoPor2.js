// let num = 0;

// for (let i = 1; i <= 25; i++) {
//   console.log((num = i / 2));
// }

// // Solucionando de outra forma (apenas para pratica)

const numbers = (num) => {
  let array = [];
  for (index = 1; index <= num; index++) {
    array.push(index);
  }
  return array;
};

const div = (array) =>
  array.forEach((element) => {
    console.log(element / 2);
  });

div(numbers(25));
