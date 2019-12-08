import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/login"
import CadastroUsuario from "./pages/cadastroUsuario"

export default function Routes () {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" exact component={Login} />
          <Route path="/cadastrar-usuario" component={CadastroUsuario} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}