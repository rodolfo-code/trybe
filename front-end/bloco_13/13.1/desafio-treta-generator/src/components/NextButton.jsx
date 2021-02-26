import React from 'react'
import { Button, Container } from 'reactstrap';

function NextButton(props) {
  const { handleClick } = props;
  return (
    <Container className='button'>
      <Button color='primary' onClick={() => handleClick()}>Próxima</Button>
    </Container>
  )
}

export default NextButton;
