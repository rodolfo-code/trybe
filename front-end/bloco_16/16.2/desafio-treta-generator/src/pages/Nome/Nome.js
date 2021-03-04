import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '../../components';
import { addName } from '../../redux/actions';
import './Nome.css';

function Nome(props) {
  const [inputName, setInputName] = useState('')
  const { newName } = props;

  return (
    <div className="nome">
      <h1>Digite um nome:</h1>
      <Input value={ inputName } onChange={ (e) => setInputName(e.target.value) } />
      { inputName.length < 1 ? '' :
        <Button label="Próxima" to="/preferencia" onClick={() => newName(inputName)} />
      }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  newName: (name) => dispatch(addName(name))
})

export default connect(null, mapDispatchToProps)(Nome);
