import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Radio, Button } from '../../components';
import { preference } from '../../redux/actions';
import './Preferencia.css';

function Preferencia({ preferencia, name, prefer }) {
  // const [preference, setPreference] = useState('')
  // console.log(name)
  // console.log(preferencia)
  return (
    <div className="preferencia">
      <h1>Escolha o certo:</h1>
      <div className="options">
        <Radio label="Biscoito" id="biscoito" htmlFor="biscoito" value="biscoito" onChange={ (e) => prefer(e.target.value) }/>
        <Radio label="Bolacha" id="bolacha" htmlFor="bolacha" value="bolacha" onChange={ (e) => prefer(e.target.value) } />
      </div>
      <Button label="Próxima" to="/comida" />
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.tretaReducer.name,
  preferencia: state.tretaReducer.name
})


const mapDispatchToProps = (dispatch) => ({
  prefer: (e) => dispatch(preference(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferencia);
