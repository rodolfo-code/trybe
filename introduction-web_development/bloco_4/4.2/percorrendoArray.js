let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for(let pos = 0; pos < numbers.length; pos = pos + 1) {
    console.log(numbers[pos]);
};

// ou

const print = (array) => array.forEach(element => {
    console.log(element)
});
print(numbers)