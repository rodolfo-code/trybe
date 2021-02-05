import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.changeEmail = this.changeEmail.bind(this)
    this.saveEmail = this.saveEmail.bind(this)
    
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  saveEmail() {
    this.setState({
      saveEmail: this.state.email,
      email: '',
    })
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor='id-email'>Insira seu email:</label>    
        <input id="id-email" type='email' value={ email } onChange={ this.changeEmail } />
        <input id="btn-enviar" type='button' data-testid="id-send" value='Salvar' onClick={ this.saveEmail }/>
        <section>
          <h1 data-testid="id-email-user">{`Valor: ${saveEmail}` }</h1>
        </section>

      </div>
    )
  }
}

