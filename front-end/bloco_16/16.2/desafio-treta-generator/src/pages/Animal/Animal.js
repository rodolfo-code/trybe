import React from 'react';
import { connect } from 'react-redux';
import { Select, Button } from '../../components';
import { animalSelect } from '../../redux/actions';
import './Animal.css';

function Animal({animal}) {
  
  return (
    <div className="animal">
      <h1>Escolha um animal:</h1>
      <Select label="Escolha um animal" onChange={ (e) => animal(e.target.value) } />
      <Button label="Próxima" to="/manchete" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  animal: (e) => dispatch(animalSelect(e))
})

export default connect(null, mapDispatchToProps)(Animal);
