import React, { Component } from "react";

class InputIdade extends Component {
  render() {
    const { value, handleIdade} = this.props

    let erro = undefined
    if(value < 18) erro = 'Idade deve ser maior do que 18 anos';
    return (
      <label>
        Idade:
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleIdade}
        />
        <span>{erro? erro : ''}</span>
      </label>
    );
  }
}

export default InputIdade;
