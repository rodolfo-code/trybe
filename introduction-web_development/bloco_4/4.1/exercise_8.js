let a = 3;
let b = 2;
let c = 9;


if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
};

/*ou*/

let ePar = false;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    ePar = true;
};
console.log(ePar);
