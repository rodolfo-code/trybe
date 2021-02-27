import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import InputName from './InputName.js';
import EscolhaCerto from './EscolhaCerto.js';
import EscolhaPior from './EscolhaPior.js';
import EscolhaAnimal from './EscolhaAnimal.js';
import GerandoTreta from './GerandoTreta.js';



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

  // ============ Arrays ============

  const foods = ['AÇAI', 'SUSHI', 'SOPA'];

  
  const answer = {
    name,
    bolacha,
    worst,
    animal,
  }

  return (
    <Switch>
      <Route exact path='/' render={
        () => <InputName {...funcs} /> } />
      <Route path='/preferencia' render={
        () => <EscolhaCerto clickRadio={clickRadio} redirect='/comida'/>} />
      <Route path='/comida' render={() => <EscolhaPior chooseTheWorst={chooseTheWorst} redirect={'/animal'} foods={foods}/>} />
      <Route path='/animal' render={() => <EscolhaAnimal chooseAnimal={chooseAnimal} redirect={'/manchete'} />} />
      <Route path='/manchete' render={() => <GerandoTreta {...answer} />} />
    </Switch>
  )
}

export default Routes;
