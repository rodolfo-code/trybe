import React from 'react';
import { connect } from 'react-redux';
import { Radio, Button } from '../../components';
import { preference } from '../../redux/actions';
import './Preferencia.css';

function Preferencia({ prefer, preference }) {
  const rendButton = () => {
    return preference.length < 1 ? '' : <Button label="Próxima" to="/comida" />
  }
  return (
    <div className="preferencia">
      <h1>Escolha o certo:</h1>
      <div className="options">
        <Radio label="Biscoito" id="biscoito" htmlFor="biscoito" value="biscoito" onChange={ (e) => prefer(e.target.value) }/>
        <Radio label="Bolacha" id="bolacha" htmlFor="bolacha" value="bolacha" onChange={ (e) => prefer(e.target.value) } />
      </div>
      {rendButton()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  preference: state.tretaReducer.preference,
})


const mapDispatchToProps = (dispatch) => ({
  prefer: (e) => dispatch(preference(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferencia);
