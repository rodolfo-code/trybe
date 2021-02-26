import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import EscolhaCerto from './EscolhaCerto';
import EscolhaPior from './EscolhaPior';
// import EscolhaAnimal from './EscolhaAnimal';
// import GerandoTreta from './GerandoTreta';
import InputName from './InputName';



function Routes() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');

  // ============ InputName ============
  function handleClick() {
    setName(inputName)
    setInputName('')
  }

  function handleChange(e) {
    setInputName(e)
  }

  const funcs = {
    handleChange,
    handleClick,
    input: inputName,
    redirect: '/preferencia'
  }

  // ============ EscolhaCerto ============

  const [bolacha, setBolacha] = useState('');

  function selectRadio() {

  }

  function clickRadio(e) {
    setBolacha(e)
  }
  console.log(bolacha)

  return (
    <Switch>
      <Route exact path='/' render={
        () => <InputName {...funcs} /> } />
      <Route path='/preferencia' render={
        () => <EscolhaCerto clickRadio={clickRadio} redirect='/comida'/>} />
      <Route path='/comida' render={() => <EscolhaPior valores={ {name, bolacha} } />} />
      {/* <Route path='/animal' render={EscolhaAnimal} /> */}
      {/* <Route path='/manchete' render={GerandoTreta} /> */}
    </Switch>
  )
}

export default Routes;
