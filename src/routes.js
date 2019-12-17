import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Login,
  CadastroUsuario,
  Home,
  RecuperarSenha,
  CadastroEvento,
  DetalhesEvento
} from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eventos/:parametro" component={Home} />
          <Route path="/cadastrar-usuario" component={CadastroUsuario} />
          <Route path="/login" component={Login} />
          <Route path="/recuperar-senha" component={RecuperarSenha} />
          <Route path="/cadastrar-evento" component={CadastroEvento} />
          <Route path="/detalhes-evento" component={DetalhesEvento} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}
