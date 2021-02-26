import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NextButton from '../components/NextButton';
// import EscolhaAnimal from './EscolhaAnimal';
// import EscolhaCerto from './EscolhaCerto';
// import EscolhaPior from './EscolhaPior';
// import GerandoTreta from './GerandoTreta';
import InputName from './InputName';


function Routes() {
  return (
    <Switch>
      <Route exact path='/' render={() => <InputName button={NextButton}/>}/>
      {/* <Route path='/preferencia' render={EscolhaCerto} /> */}
      {/* <Route path='/comida' render={EscolhaPior} /> */}
      {/* <Route path='/animal' render={EscolhaAnimal} /> */}
      {/* <Route path='/manchete' render={GerandoTreta} /> */}
    </Switch>
  )
}

export default Routes;
