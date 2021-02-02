import React, { Component } from "react";

class InputCheckBox extends Component {
  render() {
    const { value, handleCheckBox} = this.props
    return (
      <label>
        Vai comparecer à conferência?
        <input
          type="checkbox"
          name="vaiComparecer"
          value={value}
          onChange={handleCheckBox}
        />
      </label>
    );
  }
}

export default InputCheckBox;
