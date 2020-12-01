let array = [];

for(index = 0; index <= 10; index += 1) {
  arrayIndex = Math.round(Math.random() * 40);
  array += `${arrayIndex}, `
}
console.log(array)