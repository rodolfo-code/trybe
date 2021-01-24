import React, { Component } from "react";

class ButtonState extends Component {
  render() {
    const { handleChange, value } = this.props
    return (
      <label>
        Diga seu estado favorito!
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default ButtonState;