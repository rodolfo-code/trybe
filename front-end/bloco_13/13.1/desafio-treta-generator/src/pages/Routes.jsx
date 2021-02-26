import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import EscolhaAnimal from './EscolhaAnimal';
// import EscolhaCerto from './EscolhaCerto';
// import EscolhaPior from './EscolhaPior';
// import GerandoTreta from './GerandoTreta';
import InputName from './InputName';



function Routes() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');

  const handleClick = () => {
    setName(inputName)
    setInputName('')
  }

  const handleChange = (e) => {
    setInputName(e)
  }
  console.log(inputName)
  console.log(name)

  return (
    <Switch>
      <Route exact path='/' render={
        () => <InputName handleChange={handleChange} handleClick={handleClick} input={inputName} />}/>
      {/* <Route path='/preferencia' render={EscolhaCerto} /> */}
      {/* <Route path='/comida' render={EscolhaPior} /> */}
      {/* <Route path='/animal' render={EscolhaAnimal} /> */}
      {/* <Route path='/manchete' render={GerandoTreta} /> */}
    </Switch>
  )
}

export default Routes;
