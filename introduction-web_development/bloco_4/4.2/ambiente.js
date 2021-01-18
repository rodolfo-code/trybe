let num = [3, 2, 8, 6, 7];

num.push(5);

console.log(`nosso vetor é o ${num}`);

console.log("nosso array " + num);

console.log(`O vetor tem ${num.length} posições`);

console.log(`O primeiro elemento é ${num[0]}`);

console.log(`O array de forma ordenada é ${num.sort()}`);

let pos = num.indexOf(2);

if (pos == -1) {
  console.log(`Valor não encontrado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
