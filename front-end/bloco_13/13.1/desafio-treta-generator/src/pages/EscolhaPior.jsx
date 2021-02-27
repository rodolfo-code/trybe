import React from 'react';
import { Button, ButtonToolbar, Container } from 'reactstrap';
import NextButton from '../components/NextButton';

function EscolhaPior(props) {
  const { chooseTheWorst, redirect } = props;
  return (
    <>
      <h1><strong>Qual é o pior?</strong></h1>
      <Container>
        <ButtonToolbar>
          <Button outline color="danger" value="AÇAI" onClick={(e) => chooseTheWorst(e.target.value)}>AÇAI</Button>
          <Button outline color="danger" value="SUSHI" onClick={(e) => chooseTheWorst(e.target.value)}>SUSHI</Button>
          <Button outline color="danger" value="SOPA" onClick={(e) => chooseTheWorst(e.target.value)}>SOPA</Button>
        </ButtonToolbar>
        <hr/>
        <NextButton redirect={redirect}>Próxima</NextButton>
      </Container>
    </>
  )
}

export default EscolhaPior;
