// index da store
import { createStore, combineReducers } from 'redux';
import { tretaReducer } from '../reducers'


const rootReducer = combineReducers({ tretaReducer })

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



export default store;