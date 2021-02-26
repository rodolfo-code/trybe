import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import EscolhaCerto from './EscolhaCerto';
// import EscolhaAnimal from './EscolhaAnimal';
// import EscolhaPior from './EscolhaPior';
// import GerandoTreta from './GerandoTreta';
import InputName from './InputName';



function Routes() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');

  // ============ InputName ============
  const handleClick = () => {
    setName(inputName)
    setInputName('')
  }

  const handleChange = (e) => {
    setInputName(e)
  }
  console.log(inputName)
  console.log(name)

  const funcs = {
    handleChange,
    handleClick,
    input: inputName,
    redirect: '/preferencia'
  }

  return (
    <Switch>
      {/* <Route exact path='/' render={
        () => <InputName handleChange={handleChange} handleClick={handleClick} input={inputName} />}/> */}
      <Route exact path='/' render={
        (props) => <InputName {...funcs} /> } />
      <Route path='/preferencia' render={EscolhaCerto} />
      {/* <Route path='/comida' render={EscolhaPior} /> */}
      {/* <Route path='/animal' render={EscolhaAnimal} /> */}
      {/* <Route path='/manchete' render={GerandoTreta} /> */}
    </Switch>
  )
}

export default Routes;
