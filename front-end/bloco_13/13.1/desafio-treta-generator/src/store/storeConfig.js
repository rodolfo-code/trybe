import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  nome: function(state, action) {
    return {
      nome: '',
      cookie: '',
      comida: '',
      animal: '',
    }
  }
})

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;