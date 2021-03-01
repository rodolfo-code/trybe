import React from 'react';
import { Container } from 'reactstrap';
import NextButton from '../components/NextButton';
import { connect } from 'react-redux';

function GerandoTreta(props) {
  const { cookie, food, animal, nome } = props;

  const conditional = () => {
    if(food === 'SOPA') return `${food} não é janta`
    return `${food} é ruim`
  }

  return (
    <>
      <h1><strong>GERANDO A TRETA</strong></h1>
      <Container className="treta-container">
        <p className="treta-text">
          {`Em entrevista internacional, ${nome} teve que debater sobre a discussão mais acirrada do século,
          é biscoito ou bolacha? ${nome} foi direto na canela dizendo que o certo é ${cookie}!
          E ainda complementou que ${conditional()} e que nem seu ${animal} come!`}
        </p>
      </Container>
      <NextButton redirect="/">Inicio</NextButton>
    </>
  )
}

function mapStateToProps(state) {
  return {
    nome: state.respostas.name,
    cookie: state.respostas.cookie,
    food: state.respostas.food,
    animal: state.respostas.animal,
  }
}

export default connect(mapStateToProps)(GerandoTreta);
