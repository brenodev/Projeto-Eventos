import React, { useState } from "react";
import firebase from "../../configs/firebase";
import "firebase/auth";

import "./cadastroUsuario.css";

export default function CadastroUsuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [alertTipo, setAlertTipo] = useState();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState();

  function cadastrar() {
    setLoading(true);
    setAlertTipo(null);

    if (!email || !senha) {
      setAlertTipo("erro");
      setAlert("Você precisa informar o email e senha para se cadastrar!");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(resultado => {
        setLoading(false);
        setAlertTipo("sucesso");
      })
      .catch(erro => {
        setLoading(false);
        setAlertTipo("erro");
        switch (erro.message) {
          case "Password should be at least 6 characters":
            setAlert("A senha deve ter pelo menos 6 caracteres!");
            break;
          case "The email address is already in use by another account.":
            setAlert("Este e-mail já está sendo utilizado!");
            break;
          case "The email address is badly formatted.":
            setAlert("O formato do e-mail é inválido!");
            break;
          default:
            setAlert("Não foi possivel cadastrar. Tente novamente mais tarde!");
        }
      });
  }

  return (
    <div className="form__cadastro">
      <form className="text-center form__login mx-auto mt-5">
        <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
        <input
          onChange={e => setEmail(e.target.value)}
          className="form-control my-2"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          onChange={e => setSenha(e.target.value)}
          className="form-control my-2"
          type="password"
          name="senha"
          id="senha"
          placeholder="Senha"
        />
        {loading ? (
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only text-black">Loading...</span>
          </div>
        ) : (
          <button
            onClick={cadastrar}
            type="button"
            className="btn btn-lg btn-block mt-3 mb-5 btn__cadastro"
          >
            Cadastrar
          </button>
        )}

        <div className="msg__login text-black text-center my-5">
          {alertTipo === "sucesso" && (
            <span>
              <strong>WoW! </strong>
              Usuário cadastrado com sucesso! &#128526;
            </span>
          )}
          {alertTipo === "erro" && (
            <span>
              <strong>Ops! </strong>
              {alert} &#128546;
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
