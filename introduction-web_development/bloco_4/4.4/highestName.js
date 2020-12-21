const highestName = (arr) => arr.reduce((acc, curr) => acc.length < curr.length? acc = curr: acc);
console.log(highestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))