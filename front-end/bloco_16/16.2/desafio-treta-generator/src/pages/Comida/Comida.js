import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components';
import './Comida.css';

function Comida({name, preferencia}) {
  
  console.log(name)
  console.log(preferencia)

  return (
    <div className="comida">
      <h1>Escolha o pior:</h1>
      <div className="comida-opcoes">
        <Button className={ preferencia === 'açaí' ? 'escolhida' : 'opcao' } label="Açaí" value="açaí" onClick={ (e) => this.setState({ comida: e.target.value }) } />
        <Button className={ preferencia === 'sushi' ? 'escolhida' : 'opcao' } label="Sushi" value="sushi" onClick={ (e) => this.setState({ comida: e.target.value }) } />
        <Button className={ preferencia === 'sopa' ? 'escolhida' : 'opcao' } label="Sopa" value="sopa" onClick={ (e) => this.setState({ comida: e.target.value }) } />
      </div>
      <Button label="Próxima" to="/animal" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.tretaReducer.name,
  preferencia: state.tretaReducer.preferencia
});


export default connect(mapStateToProps)(Comida);
