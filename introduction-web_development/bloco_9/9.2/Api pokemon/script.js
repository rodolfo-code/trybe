const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = pokemon;
  ul.appendChild(li);
}

// const appendNamePokemon = (namePokemon) => {
//   let h1 = document.querySelector('h1');
//   h1.innerHTML = namePokemon;
// }


const getPokemon = (pokemon, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      response.json()
      .then((data) => {
        appendPokemon(data.name);
        callback ? callback() : undefined
      });
    });
};

const fetchPokemon = () => {
  getPokemon('pikachu',
    getPokemon('squirtle',
      getPokemon('kakuna',
        getPokemon('charizard')
      )
    )
  );
};

const getPokemonPromisse = (pokemon) => {
  return new Promise((resolve, reject) => {
    if (pokemon === 'squirtle') {
      reject('Esse pokemon não pode estar aqui')
    } else {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      response.json()
        .then((data) => {
          appendPokemon(data.name);
          resolve();
        })
    })
  }
  })
}

// const promissePokemon = () => {
//   getPokemonPromisse('pikachu')
//     .then(() => getPokemonPromisse('squirtle'))
//     .then(() => getPokemonPromisse('kakuna'))
//     .then(() => getPokemonPromisse('charizard '))
// }

const promissePokemon = async () => {
  try {
    await getPokemonPromisse('pikachu');
    await getPokemonPromisse('kakuna');
    await getPokemonPromisse('squirtle');
    await getPokemonPromisse('charizard');
  } catch (error) {
    console.log(error);
  }  
}

window.onload = promissePokemon();