import React, { useState } from "react";
import { ButtonDropdown, Container, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import NextButton from "../components/NextButton";

function EscolhaAnimal(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(!dropdownOpen)

  const { chooseAnimal, redirect } = props;

  return (
    <>
      <h1><strong>Escolha um animal:</strong></h1>
      <Container>
        <Row>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Selecionar</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="Cachorro" onClick={(e) => chooseAnimal(e.target.value)}>Cachorro</DropdownItem>
              <DropdownItem value="Gato" onClick={(e) => chooseAnimal(e.target.value)}>Gato</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Row>
        <hr/>
        <NextButton redirect={redirect}/>
      </Container>
    </>
  );
}

export default EscolhaAnimal;
