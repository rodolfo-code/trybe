import React, { Component } from "react";

class InputEmail extends Component {
  render() {
    const { value, handleEmail} = this.props
    return (
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={value}
          onChange={handleEmail}
        />
      </label>
    );
  }
}

export default InputEmail;
