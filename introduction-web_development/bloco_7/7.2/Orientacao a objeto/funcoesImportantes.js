const pessoa = {
  nome: 'Arthur',
  idade: 1,
  peso: 9
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

pessoa['idade'] = 10

console.log(pessoa)

// Array dos elementos de um objeto
console.log(Object.entries(pessoa))

const array = Object.entries(pessoa);
// Iteranto sobre elelemto de um objeto
array.forEach(([chave, valor]) => {
  console.log(`${chave} => ${valor}`)
});