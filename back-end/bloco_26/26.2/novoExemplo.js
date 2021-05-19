const fs = require("fs");

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise("./file.txt")
  .then((result) => console.log(`Lido arquivo com ${result.byteLength} bytes`))
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });
