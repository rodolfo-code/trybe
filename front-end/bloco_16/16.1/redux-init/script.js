// Padrão da action
// const action = {
//   type: 'INCREMENT', /* obrigatorio para o action funcionar */
//   payload: {
//     amount: 1,
//   }
// }

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Criação do reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload.amount;
    case DECREMENT:
      return state - action.payload.amount;
    default:
      return state
  }
}

// Configurar store
const store = Redux.createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Adicionar o disparo das actions no click dos botões

const buttonIncrement = document
  .getElementById('increment')
  .addEventListener('click', () => {
    const incrementAction = {
      type: INCREMENT,
      payload: {
        amount: 1
      }
    };
    store.dispatch(incrementAction)
  })

const buttonDecrement = document
  .getElementById('decrement')
  .addEventListener('click', () => {
    const decrementAction = {
      type: DECREMENT,
      payload: {
        amount: 1,
      }
    }
    store.dispatch(decrementAction);
  })
    
const buttonIncrement10 = document
  .getElementById('increment-10')
  .addEventListener('click', () => {
    const increment10Action = {
      type: INCREMENT,
      payload: {
        amount: 10,
      }
    }
    store.dispatch(increment10Action)
  })

  // Ler dados do store global

store.subscribe(() => {
  const valueSpan = document.getElementById('value');
  valueSpan.innerHTML = store.getState()
})
