var obj = { foo: 'bar', baz: 42, top: 4};
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
console.log(typeof(Object.entries(obj)[1][1]))


// argumento não-objeto será convertido (conversão implícita) para um objeto
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]


// itera graciosamente através de chave-valor (key-value)
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}



const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};