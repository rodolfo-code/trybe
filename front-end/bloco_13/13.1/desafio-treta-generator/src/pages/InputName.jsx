import React from 'react';
import { Container, Input } from 'reactstrap';
import NextButton from '../components/NextButton';

function InputName(props) {
  const { handleChange, input, handleClick,  redirect } = props;
  console.log(props)
  return (
    <>
    <h1><strong>Digite um nome:</strong></h1>
      <Container>
        <Input type="text" name="text" id="name" value={input} onChange={(e) => handleChange(e.target.value)} />
        <hr/>
        <NextButton handleClick={handleClick} redirect={redirect} />
      </Container>
    </>
  )
}

export default InputName;
