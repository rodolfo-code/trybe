import React from 'react';
import { Button } from 'reactstrap';

function ChooseButton(props) {
  const { children, chooseTheWorst } = props;
  return (
    <>
      <Button
        outline
        color="danger"
        value={children}
        onClick={(e) => 
          chooseTheWorst(e.target.value)}
      >
        {children}
      </Button>
    </>
  )
}

export default ChooseButton;
