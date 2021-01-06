const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = pokemon;
  ul.appendChild(li);
}

const appendNamePokemon = (namePokemon) => {
  let h1 = document.querySelector('h1');
  h1.innerHTML = namePokemon;
}

const fetchPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
    .then((response) => {
      response.json().then((data) => {
        appendNamePokemon(data.name)
        data.moves.map((value) => {
          appendPokemon(value.move.name)
        })
      })
    })  
  
}

window.onload = fetchPokemon();
