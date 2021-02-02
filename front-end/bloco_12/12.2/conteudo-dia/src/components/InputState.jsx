import React, { Component } from "react";

class InputState extends Component {
  render() {
    const { handleState, value } = this.props
    return (
      <label>
        Diga seu estado favorito!
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handleState}
        />
      </label>
    );
  }
}

export default InputState;