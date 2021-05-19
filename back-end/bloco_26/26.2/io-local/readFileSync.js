const fs = require("fs");

const nomeDoArquivo = "./meu-arquivos.txt";

try {
  const data = fs.readFileSync(nomeDoArquivo, "utf8");
  console.log(data);
} catch {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

console.log("errou");
