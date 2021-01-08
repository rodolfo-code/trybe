// const number = () => Math.pow(Math.ceil(Math.random() * 50), 2);


const promisesSumRandomNumbers = () => {
  
  return new Promise((resolve, reject) => {

    const array = Array.from(
      { length: 10 },
      () => Math.pow(Math.ceil(Math.random() * 50), 2))
        .reduce((acc, curr) => acc + curr)
    
    array < 8000 ? resolve() : reject()    
  });
};

const execute = () => {
  promisesSumRandomNumbers()
    .then((result) => console.log('ok'))
    .catch((msg) => console.log('falhou'));
};

execute();
