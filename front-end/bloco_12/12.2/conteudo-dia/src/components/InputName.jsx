import React, { Component } from "react";

class InputName extends Component {
  render() {
    const { handleName, value } = this.props

    return (
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={value}
          onChange={handleName}
        />
      </label>
    );
  }
}

export default InputName;
