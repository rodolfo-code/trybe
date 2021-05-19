const fs = require("fs/promises");

fs.writeFile("./meu-arquivo.txt", "Meu textão")
  .then(() => {
    console.log("Arquivo escrito com sucesso!");
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

// asyn/await

async function main() {
  try {
    await fs.writeFile("./arquivo.txt", "Meu textão", { flag: "wx" });
    console.log("Arquivo escrito com sucesso!");
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();
