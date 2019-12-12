import React from "react";
import "./home.css";
import { Navbar, Card } from "../../components";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <Navbar />

      <h1>{console.log(useSelector(state => state.usuarioEmail))}</h1>
      <h1>Logado: {console.log(useSelector(state => state.usuarioLogado))}</h1>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
