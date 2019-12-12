import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default function Card() {
  return (
    <div className="col-md-3 col-sm-12">
      <img
        src="https://via.placeholder.com/100X50"
        alt="imagem do evento"
        className="card-img-top img__cartao"
      />
      <div className="card-body">
        <h5>Titulo do Evento</h5>
        <p className="card-text text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </p>
        <div className="row rodape__card d-flex align-items-center">
          <div className="col-6">
            <Link to="/" className="btn btn-sm btn__detalhes">
              + detalhes
            </Link>
          </div>
          <div className="col-6 text-right">
            <i className="fas fa-eye">
              <span>2019</span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
