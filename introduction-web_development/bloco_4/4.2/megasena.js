let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifithNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [fifithNumber, secondNumber, thirdNumber, fourthNumber, fifithNumber, sixthNumber];

let play1 = [20, 16, 28, 31, 37, 55];
let play2 = [45, 27, 92, 19, 31, 12];
let play3 = [38, 16, 89, 74, 57, 82];

let plays = [play1, play2, play3];

let numberOfHits = 0;


for (let index = 0; index < plays.length; index += 1) {
    let playCurrent = plays[index];
    for (let i = 0; i < playCurrent.length; i += 1) {
        let playedNumber = playCurrent[i];
        for (let j = 0; j < megaSenaNumbers.length; j += 1) {
            let numberMegaSena = megaSenaNumbers[j];
            if(playedNumber == numberMegaSena) {
                numberOfHits += 1;
            }
        }
    }
    console.log(`Jogo a ser conferido: ${playCurrent}`);
    console.log(`Números sorteados: ${megaSenaNumbers}`);
    console.log(`Acertos do nosso jogo: ${numberOfHits}`);
}