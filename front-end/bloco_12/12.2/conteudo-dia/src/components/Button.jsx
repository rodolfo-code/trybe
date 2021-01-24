import React, { Component } from "react";

class Button extends Component {
  render() {
    const { handleChange } = this.props
    return (
      <label>
        Diga seu estado favorito!
        <textarea
          name="estadoFavorito"
          value={this.state.estadoFavorito}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Button;