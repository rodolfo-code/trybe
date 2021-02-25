import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EscolhaAnimal from './components/EscolhaAnimal'
import EscolhaCerto from './components/EscolhaCerto'
import EscolhaPior from './components/EscolhaPior'
import GerandoTreta from './components/GerandoTreta'
import InputName from './components/InputName'

function Routes() {
  return (
    <Switch>
      <Route path='/' render={InputName}/>
      <Route path='/preferencia' render={EscolhaCerto} />
      <Route path='/comida' render={EscolhaPior} />
      <Route path='/animal' render={EscolhaAnimal} />
      <Route path='/manchete' render={GerandoTreta} />
    </Switch>
  )
}

export default Routes
