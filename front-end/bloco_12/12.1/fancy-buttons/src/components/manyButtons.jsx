import React from 'react';



class ManyButtons extends React.Component {
  constructor() {
    super()
    this.consoleString = this.consoleString.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  consoleString() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    console.log(this)
    return (
      <div>
        <button onClick={this.consoleString}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default ManyButtons;
