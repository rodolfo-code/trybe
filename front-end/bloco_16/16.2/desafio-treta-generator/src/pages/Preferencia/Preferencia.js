import React from 'react';
import { connect } from 'react-redux';
import { Radio, Button } from '../../components';
import './Preferencia.css';

function Preferencia({ name }) {
  console.log(name)
  return (
    <div className="preferencia">
      <h1>Escolha o certo:</h1>
      <div className="options">
        <Radio label="Biscoito" id="biscoito" htmlFor="biscoito" value="biscoito" onChange={ (e) => this.setState({ preferencia: e.target.value }) }/>
        <Radio label="Bolacha" id="bolacha" htmlFor="bolacha" value="bolacha" onChange={ (e) => this.setState({ preferencia: e.target.value }) } />
      </div>
      <Button label="Próxima" to="/comida" />
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.tretaReducer.name
})

export default connect(mapStateToProps)(Preferencia);
