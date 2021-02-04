import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input data-testid="id-email" type="email" />
        <input id='btn-send' type='button' data-testid='id-send' value='Enviar' />
        <input id="btn-back" type="button" value="Voltar" />
      </div>
    </div>
  );
}

export default App;
