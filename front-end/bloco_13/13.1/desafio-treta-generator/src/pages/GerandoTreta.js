import React from 'react';
import { Container } from 'reactstrap';
import NextButton from '../components/NextButton';

function GerandoTreta(props) {
  const { name, bolacha, worst, animal } = props;

  const conditional = () => {
    if(worst === 'SOPA') return `${worst} não é janta`
    return `${worst} é ruim`
  }

  return (
    <>
      <h1><strong>GERANDO A TRETA</strong></h1>
      <Container className="treta-container">
        <p className="treta-text">
          {`Em entrevista internacional, ${name} teve que debater sobre a discussão mais acirrada do século,
          é biscoito ou bolacha? ${name} foi direto na canela dizendo que o certo é ${bolacha}!
          E ainda complementou que ${conditional()} e que nem seu ${animal} come!`}
        </p>
      </Container>
      <NextButton redirect="/">Inicio</NextButton>
    </>
  )
}

function mapStateToProps(state) {
  
}

export default GerandoTreta;
