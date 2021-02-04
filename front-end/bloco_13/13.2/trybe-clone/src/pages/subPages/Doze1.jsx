import React, { Component } from 'react'

class Doze1 extends Component {
  render() {
    return (
      <main>
        <h1>Componentes com estado - Gabarito</h1>
        <section>
          <h3>Gabarito dos exercícios</h3>
          <ol>
            <li>
              <p>
              Altere a sua página para que, ao invés de exibir toda a lista de pokémons,
              ela exiba um pokémon por vez. Ao apertar um botão de Próximo pokémon ,
              a página passa a exibir o próximo pokémon da lista, e depois o próximo,
              e assim sucessivamente. Ao se chegar ao último pokémon da lista, a pokedex
              deve voltar para o primeiro pokémon no apertar do botão. Dica: Lembre-se disso !
              </p>
            </li>
            <li>
              <p>
              Sua pokedex deve ter dois botões contendo os tipos Fire e Psychic .
              A partir dessa seleção, a pokedex deve circular somente pelos pokémons daquele tipo.
              Quando a página carrega, um desses filtros deve estar selecionado.
              </p>
            </li>
          </ol>
        </section>
      </main>
    )
  }
}

export default Doze1;
