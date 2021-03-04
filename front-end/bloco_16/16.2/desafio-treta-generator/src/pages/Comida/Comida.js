import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components';
import { foodSelect } from '../../redux/actions';
import './Comida.css';

function Comida({preferencia, food}) {
  return (
    <div className="comida">
      <h1>Escolha o pior:</h1>
      <div className="comida-opcoes">
        <Button className={ preferencia === 'açaí' ? 'escolhida' : 'opcao' } label="Açaí" value="açaí" onClick={ (e) => food(e.target.value) } />
        <Button className={ preferencia === 'sushi' ? 'escolhida' : 'opcao' } label="Sushi" value="sushi" onClick={ (e) => food(e.target.value) } />
        <Button className={ preferencia === 'sopa' ? 'escolhida' : 'opcao' } label="Sopa" value="sopa" onClick={ (e) => food(e.target.value) } />
      </div>
      {/* <Button label="Próxima" to="/animal" /> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  food: (e) => dispatch(foodSelect(e))
})

export default connect(null, mapDispatchToProps)(Comida);
