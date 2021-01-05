const myFizzBuzz = require('./myFizz');

describe('myFizzBuzz', () => {
  it('return "fizzBuzz" if the argument is divisible by 3 and 5', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  it(`returns 'fizz' if the argument is only divisible by 3`, () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });
  it(`returns 'buzz' if the argument is only divisible by 5`, () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('returns the same argument if it is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('returns false if argument is not a number', () => {
    expect(myFizzBuzz('is not a number')).toBeFalsy();
  });
});