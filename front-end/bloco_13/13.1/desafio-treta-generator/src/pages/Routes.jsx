import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import InputName from './InputName';
import EscolhaCerto from './EscolhaCerto';
import EscolhaPior from './EscolhaPior';
import EscolhaAnimal from './EscolhaAnimal';
import GerandoTreta from './GerandoTreta';



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

  function clickRadio(e) {
    setBolacha(e)
  }

  // ============ EscolhaPior ============

  const [worst, setWorst] = useState('')

  function chooseTheWorst(e) {
    setWorst(e)
  }

  // ============ EscolhaUmAnimal ============

  const [animal, setAnimal] = useState('');

  function chooseAnimal(e) {
    setAnimal(e)
  }
  
  console.log(worst)
  console.log(bolacha)
  console.log(name)
  console.log(animal)

  return (
    <Switch>
      <Route exact path='/' render={
        () => <InputName {...funcs} /> } />
      <Route path='/preferencia' render={
        () => <EscolhaCerto clickRadio={clickRadio} redirect='/comida'/>} />
      <Route path='/comida' render={() => <EscolhaPior chooseTheWorst={chooseTheWorst} redirect={'/animal'} />} />
      <Route path='/animal' render={() => <EscolhaAnimal chooseAnimal={chooseAnimal} redirect={'/manchete'} />} />
      <Route path='/manchete' render={GerandoTreta} />
    </Switch>
  )
}

export default Routes;
