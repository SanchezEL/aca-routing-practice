import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Bio from './components/Bio'
import Secret from './components/Secret'

const Router = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/secret" component={Secret} />
    </Switch>
  )
}
export default Router;