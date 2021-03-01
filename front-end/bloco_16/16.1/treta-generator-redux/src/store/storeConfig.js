import { createStore, combineReducers} from 'redux';

const reducers = combineReducers({
  respostas: function(state, action) {
    // console.log(state, ' ', action)
    return {
      name: 'Ticaracatica',
      cookie: 'É bolacha mano',
      food: 'nenhum',
      animal: 'cachorro'
    }
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig;