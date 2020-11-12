let n = 5;
let symbol = '*';
let inputLine = '';
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let i = 0; i <= middle; i += 1) {
    for(let j = 1; j <= n; j += 1) {
        if (j > right && j < left) {
            inputLine += '*';
        } else {
            inputLine += ' ';
        }
    }
    console.log(inputLine)
    inputLine = '';
    right -= 1;
    left += 1;
}