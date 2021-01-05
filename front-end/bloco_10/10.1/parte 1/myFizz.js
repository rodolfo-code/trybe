// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }


const myFizzBuzz = (num) => {
  return typeof num !== 'number'? false :
  num % 3 === 0 && num % 5 === 0 ? 'fizzbuzz' :
  num % 3 === 0? 'fizz' : num % 5 === 0? 'buzz': num
}




console.log(myFizzBuzz(5))

module.exports = myFizzBuzz;