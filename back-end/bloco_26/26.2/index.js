function recebeParans(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if ([param1, param2, param3].some((param) => typeof param !== "number")) {
      return reject(new Error(`Informe apenas números`));
    }

    const op = (param1 + param2) * param3;

    if (op < 50) {
      return reject(new Error("Valor muito baixo"));
    }

    resolve(op);
  });

  return promise;
}

function rand() {
  return Math.ceil(Math.random() * 100);
}

const randomArray = Array.from({ length: 3 }, () => rand());

function call() {
  recebeParans(...randomArray)
    .then((result) => console.log(result))
    .catch((err) => console.error(err.message));
}

call();

// Async/await

async function call2() {
  try {
    const result = await recebeParans(...randomArray);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

call2();
