const number = () => Math.pow(Math.ceil(Math.random() * 50), 2);

const arrayNumber = (param) => {
  return Array.from({length: 10}, param);
};

const promisesSumRandomNumbers = () => {
return new Promise((resolve, reject) => {
  const array = arrayNumber(number);
  const result = array.reduce((acc, curr) => acc + curr)
  if (result < 8000) {
    let arr = [2, 3, 5, 10];
    const newArray = arr.map((element) => 8000 / element)
    return resolve(newArray)
  }
  reject(`"É mais de oito mil! Essa promise deve estar quebrada!"`)  
})
}

const execute = () => {
  promisesSumRandomNumbers()
  .then((result) => console.log(result))
  .catch(msg => console.log(msg))
}

execute()
