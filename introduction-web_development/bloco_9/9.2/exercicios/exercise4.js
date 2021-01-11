const promisesSumRandomNumbers = () => {
  
  return new Promise((resolve, reject) => {
    
    const array = Array.from(
      { length: 10 },
      () => Math.pow(Math.ceil(Math.random() * 50), 2))
        .reduce((acc, curr) => acc + curr)
    
    array < 8000 ? resolve(array) : reject()    
  });
};

const execute = () => {
  promisesSumRandomNumbers()
    .then((result) => console.log([2, 3, 5, 10].map(element => result / element)))
    .catch((msg) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
};

// async await

const onload = async () => {
  try {
    const sum = await promisesSumRandomNumbers()
    console.log(sum)
  } catch (error) {
    console.log('deu ruim' )
  }
}

execute();
onload();