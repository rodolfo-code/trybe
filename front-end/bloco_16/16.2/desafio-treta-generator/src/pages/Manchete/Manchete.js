import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components';
import './Manchete.css';

function Manchete(props) {
  const { name, preference, food, animal } = props;

  return (
    <>
    <div className="manchete">
      <div>
        <h1>GERANDO A TRETA</h1>
        Em entrevista internacional, 
        <strong> { name }</strong> teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? 
        <strong> { name }</strong> foi direto na canela dizendo que o certo é
        <strong> { preference }</strong>! E ainda complementou que 
        <strong> {food === 'sopa' ? 'sopa não é janta' : `${ food } é ruim` }</strong> e que nem seu 
        <strong> { animal }</strong> come!
      </div>
      <Button label="Início" to="/" />
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  name: state.tretaReducer.name,
  preference: state.tretaReducer.preference,
  food: state.tretaReducer.food,
  animal: state.tretaReducer.animal
})

export default connect(mapStateToProps)(Manchete);
