import React, { useState } from "react";
import "./login.css";
import firebase from "../../configs/firebase";
import 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function logar() {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      alert("usuario logado")
    }).catch(erro => {
      alert(erro)
    })
  }

  return (
    <div className="login__content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img
            className="mb-4"
            src="../../assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>
        <input
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Endereço de email"
          required
        />
        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
          required
        />
        <button onClick={logar} className="btn btn-lg btn-block btn__login" type="button">
          Entrar
        </button>
        <div className="msg__login text-white text-center my-5">
          <span>
            <strong>WoW! </strong>
            Você está conectado! &#128526;
          </span>
          <br/>
          <span>
            <strong>Ops! </strong>
            Verifique se a senha ou usuário estão corretos! &#128546;
          </span>
        </div>
        <div className="opcoes__login mt-5 text-center">
          <a href="#" className="mx-2">
            Quero cadastrar
          </a>
          <span className="text-white">&#9733;</span>
          <a href="#" className="mx-2">
            Recuperar senha
          </a>
        </div>
      </form>
    </div>
  );
}
