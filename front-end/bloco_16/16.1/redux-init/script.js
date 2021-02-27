// Padrão da action
// const action = {
//   type: 'INCREMENT', /* obrigatorio para o action funcionar */
//   payload: {
//     amount: 1,
//   }
// }

// Criação do reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  
    default:
      return state
  }
}

// Configurar store
const store = Redux.createStore(counterReducer)

// Adicionar o disparo das actions no click dos botões

const buttonIncrement = document
  .getElementById('increment')
  .addEventListener('click', () => {
    const incrementAction = {
      type: 'INCREMENT'
    };
    store.dispatch(incrementAction)
  })

  // Ler dados do store global

  store.subscribe(() => {
    const valueSpan = document.getElementById('value');
    valueSpan.innerHTML = store.getState()
  })

  //