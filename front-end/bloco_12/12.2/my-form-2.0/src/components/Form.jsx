import React, { Component } from 'react';
import InputRender from './TextInputs';

class Form extends Component {
  constructor() {
    super()

    this.textToUpper = this.textToUpper.bind(this)
    this.validateAddress = this.validateAddress.bind(this)
  }

  textToUpper(event) {
    event.target.value = event.target.value.toUpperCase()
  }

  validateAddress(event) {
    event.target.value = event.target.value.replace(/[^\w\s]/gi, '')
  }

  render() {
    const { fields} = this.props
    console.log()
    return (
      <form action="">
        <fieldset>
        <legend>Dados pessoais</legend>
        
        {fields.map(field => 
          <InputRender 
            key={field.nome} 
            fields={field} 
            textToUpper={this.textToUpper}
            validateAddress={this.validateAddress}
            />
          )}

          <label>
            Estado:
            <select>
              
            </select>
          </label>

      </fieldset>
      </form>
    )
  }
}

export default Form;