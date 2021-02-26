import React from 'react';
import { Container, Input } from 'reactstrap';
import NextButton from '../components/NextButton';

function InputName(props) {
  console.log()
  return (
    <Container>
      <Input type="text" name="text" id="name" />
      <NextButton />
    </Container>
  )
}

export default InputName;
