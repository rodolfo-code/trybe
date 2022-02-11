import React from 'react';
import { connect } from 'react-redux';
import { Select, Button } from '../../components';
import { animalSelect } from '../../redux/actions';
import './Animal.css';

function Animal({animal, animalLength}) {
  const btnComp = <Button label="Próxima" to="/manchete" />;

  return (
    <div className="animal">
      <h1>Escolha um animal:</h1>
      <Select label="Escolha um animal" onChange={ (e) => animal(e.target.value) } />
      
      {animalLength < 1 ? '' : btnComp}
    </div>
  );
}

const mapStateToProps = (state) => ({
  animalLength: state.tretaReducer.animal.length,
});

const mapDispatchToProps = (dispatch) => ({
  animal: (e) => dispatch(animalSelect(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
