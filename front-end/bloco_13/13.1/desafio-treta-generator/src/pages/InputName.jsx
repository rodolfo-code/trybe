import React from 'react';
import { Container, Input, Label } from 'reactstrap';
import NextButton from '../components/NextButton';

function InputName(props) {
  const { handleChange, input, handleClick,  redirect } = props;
  console.log(props)
  return (
    <>
      <Container>
        <Label htmlFor="name">

          <h1><strong>Digite um nome:</strong></h1>
        </Label>
        <Input type="text" name="text" id="name" value={input} onChange={(e) => handleChange(e.target.value)} />
        <hr/>
        <NextButton handleClick={handleClick} redirect={redirect} />
      </Container>
    </>
  )
}

export default InputName;
