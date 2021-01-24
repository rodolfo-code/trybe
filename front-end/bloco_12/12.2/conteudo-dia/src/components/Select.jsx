import React, { Component } from "react";

class SelectWord extends Component {
  render() {
    const { value, handleSelect } = this.props
    return (
      <label>
        Escolha sua palavra chave:
        <select
          name="palavraChave"
          value={value}
          onChange={handleSelect}
        >
          <option value="estado">Estado</option>
          <option value="evento">Eventos</option>
          <option value="porps">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>
    );
  }
}

export default SelectWord;
