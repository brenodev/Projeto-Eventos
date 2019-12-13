import React,{useState, useEffect} from "react";
import "./home.css";
import { Navbar, Card } from "../../components";
import { useSelector } from "react-redux";

import firebase from "../../configs/firebase";
export default function Home() {
  const [eventos, setEventos] = useState([]);
  let listaEventos = []
  
  useEffect(() => {
    firebase.firestore().collection('eventos').get().then(async (resultado) => {
      await resultado.docs.forEach(doc => {
        listaEventos.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setEventos(listaEventos)
    })
  },)
  
  return (
    <>
      <Navbar />
      <div className="row mt-5 p-5">
        {
          eventos.map(item => <Card 
            key={item.id}
            id={item.id}
            img={item.foto}
            titulo={item.titulo}
            detalhes={item.detalhes}
            visualizacoes={item.visualizacoes}
          />)
        }
      </div>
    </>
  );
}
