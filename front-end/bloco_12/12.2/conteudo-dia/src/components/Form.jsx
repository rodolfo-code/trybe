import React, { Component } from 'react';

import InputCheckBox from './InputCheckBox';
import InputEmail from './InputEmail';
import InputIdade from './InputIdade';
import InputName from './InputName';
import InputState from './InputState';
import SelectWord from './Select';

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleFile = this.handleFile.bind(this)

    this.inputFile = React.createRef();

    this.state = {
      estadoFavorito: '',
      name: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChave: '',
      nomeDoArquivo: ''
    }
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  handleFile(event) {
    event.preventDefault();
    this.setState({
      nomeDoArquivo: `Arquivo ${this.inputFile.current.files[0].name} enviado`
    })
  }
  
  render() {
    const {estadoFavorito, name, email, idade, vaiComparecer, palavraChave, nomeDoArquivo} = this.state
    const { handleChange} = this

    return (
      <div>
        <h1>Vamo começar a testar forms!</h1>
        <fieldset>
          <legend>Formulário:</legend>
          <form>
            <InputState value={estadoFavorito} handleState={handleChange} />
            <br/>
            <InputName value={name} handleName={handleChange} />
            <br/>
            <InputEmail value={email} handleEmail={handleChange} />
            <br/>
            <InputIdade value={idade} handleIdade={handleChange} />
            <br/>
            <InputCheckBox value={vaiComparecer} handleCheckBox={handleChange} />
            <br/>
            <SelectWord  value={palavraChave} handleSelect={handleChange}/>
            <br/>        
          </form>
          <form onSubmit={this.handleFile}>
              <label>
                Arquivo:
                <input 
                  type="file" 
                  name="escolhaUmArquivo"
                  ref={this.inputFile}
                />
              </label>
              <br/>
              <br/>
              <button type="submit">Enviar</button>
              <h1>{this.state.nomeDoArquivo}</h1>
          </form>
          
          </fieldset>
      </div>
    )
  }
}

export default Form;
