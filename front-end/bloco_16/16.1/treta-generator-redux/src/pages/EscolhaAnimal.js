import React from "react";
import { Container } from "reactstrap";
import Dropdown from "../components/Dropdown";
import NextButton from "../components/NextButton";

function EscolhaAnimal(props) {
  

  const { chooseAnimal, redirect, animals } = props;

  return (
    <>
      <h1><strong>Escolha um animal:</strong></h1>
      <Container>
        <Dropdown arrayItems={animals} chooseClick={chooseAnimal}/>
        <hr/>
        <NextButton redirect={redirect}>Próxima</NextButton>
      </Container>
    </>
  );
}

export default EscolhaAnimal;
