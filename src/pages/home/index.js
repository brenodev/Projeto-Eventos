import React, { useState, useEffect } from "react";
import "./home.css";
import { Navbar, Card } from "../../components";
import { useSelector } from "react-redux";

import firebase from "../../configs/firebase";
export default function Home({ match }) {
  const [eventos, setEventos] = useState([""]);
  const [pesquisa, setPesquisa] = useState("");
  const usuarioEmail = useSelector(state => state.usuarioEmail);

  let listaEventos = [];

  useEffect(() => {
    if (match.params.parametro) {
      firebase
        .firestore()
        .collection("eventos")
        .where("usuario", "==", usuarioEmail)
        .get()
        .then(async resultado => {
          await resultado.docs.forEach(doc => {
            if (doc.data().titulo.indexOf(pesquisa) >= 0) {
              listaEventos.push({
                id: doc.id,
                ...doc.data()
              });
            }
          });

          setEventos(listaEventos);
        });
    } else {
      firebase
        .firestore()
        .collection("eventos")
        .get()
        .then(async resultado => {
          await resultado.docs.forEach(doc => {
            if (doc.data().titulo.indexOf(pesquisa) >= 0) {
              listaEventos.push({
                id: doc.id,
                ...doc.data()
              });
            }
          });

          setEventos(listaEventos);
        });
    }
  });

  return (
    <>
      <Navbar />
      <div className="row p-3 ">
        <h2 className="mx-auto p-5">Eventos Publicados</h2>
        <input
          onChange={e => setPesquisa(e.target.value)}
          type="text"
          className="form-control text-center"
          placeholder="Pesquisar evento pelo título..."
        />
      </div>
      <div className="row mt-5 p-5">
        {eventos.map(item => (
          <Card
            key={item.id}
            id={item.id}
            img={item.foto}
            titulo={item.titulo}
            detalhes={item.detalhes}
            visualizacoes={item.visualizacoes}
          />
        ))}
      </div>
    </>
  );
}
