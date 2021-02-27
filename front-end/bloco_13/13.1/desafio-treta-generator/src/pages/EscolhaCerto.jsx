import React from 'react';
import { Container, FormGroup, Input, Label } from 'reactstrap';
import NextButton from '../components/NextButton';

function EscolhaCerto(props) {
  const { redirect, clickRadio } = props
  return (
    <>
      <Container >
      <h1><strong>Qual é o certo?</strong></h1>
        <FormGroup className="bolacha-biscoito">
          <Label>
          <Input type="radio" name="radio2" value="Bolacha" onClick={(e) => clickRadio(e.target.value)} />
            Bolacha
          </Label>
          <Label>
          <Input type="radio" name="radio2" value="Biscoito" onClick={(e) => clickRadio(e.target.value)} />{' '}
            Biscoito
          </Label>
        </FormGroup>
        <hr/>
        <NextButton redirect={redirect}>Próxima</NextButton>
      </Container>
    </>
  )
}

export default EscolhaCerto;
