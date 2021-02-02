import React, { Component } from 'react';

class InputRender extends Component {
   
  render() {
    const { textToUpper, validateAddress } =this.props
    const { nome, type, limite, campoObrigatório} = this.props.fields
    return (
      <div>
        <br/>
        <label>{nome}: </label>
        <input type={type} 
          name={nome}
          onChange={nome === 'Nome'? textToUpper: 
          nome === 'Endereço'? validateAddress: undefined}
        />
      </div>
    )
  }
}

export default InputRender;