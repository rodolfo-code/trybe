
let inputNam = Math.floor(Math.random() * 100)
let divisor;

for (let i = 2; i < inputNam && divisor !== 1; i += 1) {
    divisor = 0;
    if (inputNam % i === 0) {
        divisor += 1;
    }    
}
if (divisor === 0) {
    console.log(inputNam + ' nao é primo');
} else {
    console.log(inputNam + ' é primo');
}