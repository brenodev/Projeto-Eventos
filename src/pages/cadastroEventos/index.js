import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import firebase from "../../configs/firebase";

import { Navbar } from "../../components";

import "./cadastroEventos.css";

export default function CadastroEvento() {
  const [alert, setAlert] = useState();
  const [titulo, setTitulo] = useState();
  const [tipo, setTipo] = useState();
  const [detalhes, setDetalhes] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [foto, setFoto] = useState();
  const [loading, setLoading] = useState();

  const usuarioEmail = useSelector(state => state.usuarioEmail);

  const storage = firebase.storage();
  const db = firebase.firestore();

  function cadastrar() {
    setAlert(null);
    setLoading(true);

    storage
      .ref(`imagens/${foto.name}`)
      .put(foto)
      .then(() => {
        db.collection("eventos")
          .add({
            titulo: titulo,
            tipo: tipo,
            detalhes: detalhes,
            data: data,
            hora: hora,
            usuario: usuarioEmail,
            foto: foto.name,
            visualizacoes: false,
            publico: true,
            criacao: new Date()
          })
          .then(() => {
            setAlert("sucesso");
            setLoading(false);
          })
          .catch(() => {
            setAlert("erro");
            setLoading(false);
          });
      });
  }

  return (
    <>
      <Navbar />
      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Titulo:</label>
            <input
              onChange={e => setTitulo(e.target.value)}
              type="text"
              name="titulo"
              id="titulo"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipoEvento">Tipo do Evento:</label>
            <select
              className="form-control"
              id="tipoEvento"
              onChange={e => setTipo(e.target.value)}
            >
              <option value="" disabled selected value>
                Selecione um evento
              </option>
              <option value="festaShow">Festa e Show</option>
              <option value="festaShow">Curso e Workshop</option>
              <option value="festaShow">Arte e Cultura</option>
              <option value="festaShow">Esportivo</option>
              <option value="festaShow">Saúde e Bem estar</option>
              <option value="festaShow">Congresso e Seminário</option>
              <option value="festaShow">Gatronômico</option>
              <option value="festaShow">Encontro e Network</option>
              <option value="festaShow">Religioso</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descricaoEvento">Descrição do Evento :</label>
            <textarea
              onChange={e => setDetalhes(e.target.value)}
              id="descricaoEvento"
              className="form-control"
              rows="3"
            />
          </div>
          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="descricaoEvento">Data do Evento:</label>
              <input
                onChange={e => setData(e.target.value)}
                type="date"
                id="descricaoEvento"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label htmlFor="horaEvento">Hora do Evento:</label>
              <input
                onChange={e => setHora(e.target.value)}
                type="time"
                id="horaEvento"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="uploadImage">Upload da Foto:</label>
            <input
              onChange={e => setFoto(e.target.files[0])}
              type="file"
              id="uploadImage"
              className="form-control"
            />
          </div>
          <div className="row">
            {loading === true ? (
              <div className="spinner-border text-danger mx-auto" role="status">
                <span className="sr-only text-black">Loading...</span>
              </div>
            ) : (
              <button
                onClick={cadastrar}
                type="button"
                className="btn btn-lg btn-block mt-3 mb-5 btn__cadastro"
              >
                Publicar Evento
              </button>
            )}
          </div>
        </form>
        <div className="msg__cadastro text-center mt-2">
          {alert === "sucesso" && (
            <span>
              <strong>WoW! </strong>
              Evento publicado com sucesso! &#128526;
            </span>
          )}
          {alert === "erro" && (
            <span>
              <strong>Ops! </strong>
              Não foi possível publicar o evento! &#128546;
            </span>
          )}
        </div>
      </div>
    </>
  );
}
