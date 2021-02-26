import React from 'react';
import { Container, FormGroup, Input, Label } from 'reactstrap';
import NextButton from '../components/NextButton';

function EscolhaCerto(props) {
  const { redirect, clickRadio } = props
  console.log(props)
  return (
    <>
      <h1><strong>Qual é o certo?</strong></h1>
      <Container>
        <FormGroup>
          <Label>
          <Input type="radio" name="radio2" value="Bolacha" onClick={(e) => clickRadio(e.target.value)}/>{' '}
            Bolacha
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
          <Input type="radio" name="radio2" value="Biscoito" onClick={(e) => clickRadio(e.target.value)} />{' '}
            Biscoito
          </Label>
        </FormGroup>
        <NextButton redirect={redirect}/>
      </Container>
    </>
  )
}

export default EscolhaCerto;
