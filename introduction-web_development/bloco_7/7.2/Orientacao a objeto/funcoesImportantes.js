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

// Definindo propriedades

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // se sera listado (vai aparecer como elemento visivel)
  writable: false, // Permite ser alterada?
  value: '01/01/2019' 
})

console.log(Object.keys(pessoa))

// Object.assign
const objetoDeDestino = { a: 1 };
const objeto1 = { b: 2 }
const objeto2 = { c: 3, a: 4 } // valor valido sera o ultimo valoe declarado
const obj = Object.assign(objetoDeDestino, objeto1, objeto2, objeto3)
console.log(obj)

// Nao permite que seja alterado
Object.freeze(obj)
