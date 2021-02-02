import React, { Component } from "react";

class InputName extends Component {
  render() {
    const { handleName, value } = this.props

    let error = undefined;
    let error2 = undefined
    if(value.length > 100) error = 'Texto maior que o permitido!'
    if(value.split('').some(a => !isNaN(a) && a !== ' ')) error2 = 'O campo nao deve conter números'

    return (
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={value}
          onChange={handleName}
        />
        <span>{error? error: ''}</span>
        <span>{error2? error2: ''}</span>
      </label>
    );
  }
}

export default InputName;
