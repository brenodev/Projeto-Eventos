import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import firebase from "../../configs/firebase";
import "./card.css";

export default function Card({id, key, img, titulo, detalhes, visualizacoes}) {
  const [urlImg, setUrlImg] = useState();

  useEffect(() => {
    firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImg(url))
  },[img, urlImg])

  return (
    <div className="col-md-3 col-sm-12">
      <img
        src={urlImg}
        alt="imagem do evento"
        className="card-img-top img__cartao"
      />
      <div className="card-body">
      <h5>{titulo}</h5>
        <p className="card-text text-justify">
         {detalhes}
        </p>
        <div className="row rodape__card d-flex align-items-center">
          <div className="col-6">
            <Link to={"/detalhes-evento" + id} className="btn btn-sm btn__detalhes">
              + detalhes
            </Link>
          </div>
          <div className="col-6 text-right">
            <i className="fas fa-eye">
           <span> {visualizacoes}</span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
