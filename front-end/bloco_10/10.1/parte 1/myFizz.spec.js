const myFizzBuzz = require('./myFizz');

describe('myFizzBuzz', () => {
  it('return "fizzBuzz" if the argument is divisible by 3 and 5', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  
});