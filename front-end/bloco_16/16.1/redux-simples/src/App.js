import React from 'react';
import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Media from './components/Media';


function App() {
  
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo>
        </Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
