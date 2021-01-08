const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  let h2 = document.getElementById('jokeContainer');
  h2.innerHTML = joke
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => appendJoke(data.joke))
  
};

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);

window.onload = () => fetchJoke();