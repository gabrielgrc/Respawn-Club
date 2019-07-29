import React, { Component } from "react";
import "./style.css";

export default class Cardtextcenter extends Component {
  render() {
    return (
      <body>
        <div class="card text-center">
        <h2>Paixão</h2>
        <p>
          Andar sobre duas rodas não é apenas um hobby, e sim
          <strong>uma paixão</strong>
        </p>
        <img
          src="/home/gabriel_rc/Imagens/velocimetro.jpeg"
          alt="briefcase"
          width="450"
        />
      </div>
  
      <div class="card text-center">
        <h2>Gostos</h2>
        <p>Não interessa a cilindrada, e sim <strong>a sua vontade</strong></p>
  
        <img
          src="/home/gabriel_rc/Imagens/gostos.jpg"
          alt="picture description"
          width="450"
        />
      </div>
  
      <div class="card text-center">
        <h2>Quebras de paradigma</h2>
        <p>
          Este motoclube deseja quebrar a máxima de
          <strong>"todo motoqueiro cai e pilota sem respeitar os outros"</strong>
        </p>
  
        <img
          src="/home/gabriel_rc/Imagens/paradigma.jpg"
          alt="picture description"
          width="450"
        />
      </div>
  
      <div class="card text-center">
        <h2>Amizade</h2>
        <p>
          Pois o que seria um motoclube
          <strong>sem a amizade entre os membros deste?</strong>
        </p>
        <img
          src="/home/gabriel_rc/Imagens/amizade.jpg"
          alt="picture description"
          width="450"
        />
      </div>
      </body>
    );
  }
}
