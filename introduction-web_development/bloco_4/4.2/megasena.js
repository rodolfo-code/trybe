let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifithNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [fifithNumber, secondNumber, thirdNumber, fourthNumber, fifithNumber, sixthNumber];

let turma7Play = [20, 16, 28, 31, 37, 55];
let numberOfHits = 0;

for (let i = 0; i < turma7Play.length; i += 1) {
    let playedNumber = turma7Play[i];
    for (let j = 0; j < megaSenaNumbers.length; j += 1) {
        let numberMegaSena = megaSenaNumbers[j];
        if(playedNumber == numberMegaSena) {
            numberOfHits += 1;
        }
    }
}

console.log(`Números sorteados: ${megaSenaNumbers}`);
console.log(`Acertos do nosso jogo: ${numberOfHits}`);
