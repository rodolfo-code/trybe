import React from 'react';
import { Container, FormGroup } from 'reactstrap';
import NextButton from '../components/NextButton';
import RadioButton from '../components/RadioButton';

function EscolhaCerto(props) {
  const { redirect, radioClick, arrayCookies } = props
  return (
    <>
      <Container >
      <h1><strong>Qual é o certo?</strong></h1>
        <FormGroup className="bolacha-biscoito">
          {arrayCookies.map((item, i) => <RadioButton key={i} radioClick={radioClick}>{item}</RadioButton>)}
        </FormGroup>
        <hr/>
        <NextButton redirect={redirect}>Próxima</NextButton>
      </Container>
    </>
  )
}

export default EscolhaCerto;
