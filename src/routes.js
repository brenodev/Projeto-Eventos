import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Login, CadastroUsuario, Home} from "./pages"


export default function Routes () {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cadastrar-usuario" component={CadastroUsuario} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}