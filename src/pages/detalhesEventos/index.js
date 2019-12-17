import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../configs/firebase";
import "firebase/auth";

import "./detalhesEvento.css";
import { Navbar } from "../../components";

export default function DetalhesEvento(props) {
  const [evento, setEvento] = useState({});
  const [urlImg, setUrlImg] = useState({});
  const usuarioLogado = useSelector(state => state.usuarioEmail);

  useEffect(() => {
    firebase
      .firestore()
      .collection("eventos")
      .doc(props.match.params.id)
      .get()
      .then(resultado => {
        setEvento(resultado.data());

        firebase
          .storage()
          .ref(`imagens/${evento.foto}`)
          .getDownloadURL()
          .then(url => setUrlImg(url));
      });
  });

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <img src={urlImg} alt="Banner" className="img__banner" />
          <div className="col-12 text-right mt-1 visualizacoes">
  <i className="fas fa-eye"> <span>{evento.visualizacoes}</span></i>
          </div>
          <h3 className="mx-auto mt-5 titulo">{evento.titulo}</h3>
        </div>
        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box__info p-3 my-2">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h5>
              <strong>Tipo</strong>
            </h5>
            <span className="mt-3">{evento.tipo}</span>
          </div>
          <div className="col-md-3 col-sm-12 box__info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5>
              <strong>Data</strong>
            </h5>
            <span className="mt-3">{evento.data}</span>
          </div>
          <div className="col-md-3 col-sm-12 box__info p-3 my-2">
            <i className="fas fa-clock fa-2x"></i>
            <h5>
              <strong>Hora</strong>
            </h5>
            <span className="mt-3">{evento.hora}</span>
          </div>
        </div>
        <div className="row box__detalhes mt-5">
          <div className="col-12 text-center">
            <h5>
              <strong>Detalhes do Evento</strong>
            </h5>
          </div>
          <div className="col-12 text-center">
            <p className="">{evento.detalhes}</p>
          </div>
        </div>
        {usuarioLogado === evento.usuario ? (
          <Link to="" className="btn__editar">
            <i className="fas fa-pen-square fa-3x"></i>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
