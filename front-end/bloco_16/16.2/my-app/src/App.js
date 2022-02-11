import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import InputList from './components/InputList';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InputList />
        <List />
      </Provider>
    </div>
  );
}

export default App;
