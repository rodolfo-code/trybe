let clickCount = 0
let mostrador = document.getElementById('mostrador');
let eventButton = document.getElementById('contador');

eventButton.addEventListener('click',() => {mostrador.textContent = clickCount += 1} )