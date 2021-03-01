import React from 'react'
import { Input, Label } from 'reactstrap'

function RadioButton(props) {
  const { radioClick, children } = props;

  return (
    <>
      <Label>
        <Input type="radio" name="radioButton" value={children} onClick={(e) => radioClick(e.target.value)} />
        {children}
      </Label> 
    </>
  )
}

export default RadioButton
