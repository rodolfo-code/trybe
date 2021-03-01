import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

function NextButton(props) {
  const { handleClick, redirect, children } = props;

  return (
    <Container className='button'>
      <Link to={redirect} className='btn btn-primary' 
        onClick={handleClick? () => handleClick(): null}>{children}</Link>
    </Container>
  )
}

export default NextButton;
