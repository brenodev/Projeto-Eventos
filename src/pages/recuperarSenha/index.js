import React, { useState } from "react";
import firebase from "../../configs/firebase";
import "firebase/auth";

import { Navbar } from "../../components";

import "./recuperarSenha.css";
export default function RecuperarSenha() {
  const [email, setEmail] = useState();
  const [alert, setAlert] = useState();

function recuperarSenha(){
  firebase.auth().sendPasswordResetEmail(email).then(resultado => {
    setAlert("Enviamos um link no seu e-mail para redefinir sua senha!")
  }).catch(erro => {
    setAlert('Verifique se o e-mail está correto!')
  })
}
  return (
    <>
      <Navbar />
        <form className="text-center form__login mx-auto mt-5">
          <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="form-control my-2"
            placeholder="digite seu email"
          />
          <div className="alert__email my-4 text-center">
   <span>{alert}</span>
          </div>
          <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block btn__enviar">Recuperar Senha</button>
        </form>
    </>
  );
}
