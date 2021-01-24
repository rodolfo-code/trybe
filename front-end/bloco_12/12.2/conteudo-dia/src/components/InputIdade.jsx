import React, { Component } from "react";

class InputIdade extends Component {
  render() {
    const { value, handleIdade} = this.props
    return (
      <label>
        Idade:
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleIdade}
        />
      </label>
    );
  }
}

export default InputIdade;
