import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="card 1" red>X</Card>
        <Card title="card 2" green>X</Card>
      </div>
      <div className="linha">
        <Card title="card 3" blue>Y</Card>
        <Card title="card 4" purple>y</Card>
      </div>
    </div>
  );
}

export default App;
