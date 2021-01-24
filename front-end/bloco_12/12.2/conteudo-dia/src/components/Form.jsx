import React, { Component } from 'react';
import ButtonState from './ButtonState';

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

    return (
      <div>
        <h1>Vamo começar a testar forms!</h1>
        <fieldset>
          <legend>Formulário:</legend>
          <form>
            <ButtonState value={estadoFavorito} handleChange={this.handleChange} />
            <label>
              Name:
              <input 
                type="text" 
                name='name' 
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <br/>
            <br/>
            <label>
              Email:
              <input 
                type="email" 
                name="email"
                value={this.state.email} 
                onChange={this.handleChange}
              />
            </label>
            <br/>
            <br/>
            <div>
              <label>
                Idade:
                <input 
                  type="number" 
                  name="idade"
                  value={this.state.idade}
                  onChange={this.handleChange}
                />
              </label>
              <br/>
              <br/>
              <label>
                Vai comparecer à conferência? 
                <input 
                  type="checkbox" 
                  name="vaiComparecer" 
                  value={this.state.vaiComparecer}
                  onChange={this.handleChange}
                />
              </label>            
            </div>
            <br/>
            <label>
              Escolha sua palavra chave:
              <select 
                  name="palavraChave" 
                  value={this.state.palavraChave} 
                  onChange={this.handleChange}
                >
                <option value="estado">Estado</option>
                <option value="evento">Eventos</option>
                <option value="porps">Props</option>
                <option value="hooks">Hooks</option>
              </select>
            </label>
            <br/>
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
