import React from 'react';
import { ButtonToolbar, Container } from 'reactstrap';
import ChooseButton from '../components/ChooseButton';
import NextButton from '../components/NextButton';

function EscolhaPior(props) {
  const { chooseTheWorst, redirect, foods } = props;
  return (
    <>
      <h1><strong>Qual é o pior?</strong></h1>
      <Container>
        <ButtonToolbar>
          {foods.map((food, i) => 
            <ChooseButton key={i} chooseTheWorst={chooseTheWorst}>{food}</ChooseButton>
          )}
        </ButtonToolbar>
        <hr/>
        <NextButton redirect={redirect}>Próxima</NextButton>
      </Container>
    </>
  )
}

export default EscolhaPior;
