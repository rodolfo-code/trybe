import React from 'react';
import './App.css';



class ManyButtons extends React.Component {
  constructor() {
    super()
    this.consoleString = this.consoleString.bind(this)
    this.console2 = this.console2.bind(this)
    this.button3 = this.button3.bind(this)
    this.buttonClear = this.buttonClear.bind(this)
    this.state = {
      numeroDeCliques: 0,
      numeroDePassadas: 0,
      numeroCliques: 1,
      novoElemento: '',
      divColor: { background: 'green' }
    }
  }

  consoleString() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  console2() {
    this.setState((estadoAnt, _prop) => ({
      numeroDePassadas: estadoAnt.numeroDePassadas + 2
    }))
  }

  button3() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques: estadoAnterior.numeroCliques * 3.1415928
    }))
  }

  buttonClear() {
    this.setState((estadosAnteriores, _props) => ({
      numeroDeCliques: estadosAnteriores.numeroDeCliques = 0,
      numeroCliques: estadosAnteriores.numeroCliques = 1,
      numeroDePassadas: estadosAnteriores.numeroDePassadas = 0,
      novoElemento: <span><b>Eu amo React</b></span>
    }))
  }

  // this.state.divColor

  colorirTexto() {
    if(this.state.numeroDeCliques % 2 === 0) {
      const divStyle = {
        background: 'green'
      };
      return divStyle
    }
  }


  render() {
    console.log(this)
    console.log(this.state.color)
    return (
      <div>
        <button onClick={this.consoleString} style={this.colorirTexto()}>{this.state.numeroDeCliques}</button>
        <button onClick={this.console2}>{this.state.numeroDePassadas}</button>
        <button onClick={this.button3}>{this.state.numeroCliques - 1}</button>
        <button onClick={this.buttonClear}>Limpa Tudo</button>
        <div>
          {this.state.novoElemento}
        </div>
        {/* <span>{this.colorirTexto()} porra</span> */}
      </div>
      
    )
  }
}

export default ManyButtons;
