import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

import Banner from "../../components/Banner/index";
//import meme from '../../images/meme.png';
import velocimetro from "../../images/velocimetro.jpeg"
import gostos from "../../images/gostos.jpg"
import paradigma from "../../images/paradigma.jpg"
import amizade from "../../images/amizade.jpg"

import Service from "./Service";

import "./Home.css";

export default class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
  }

  render() {
    const { data } = this.state;
    return (
      <div>
          <Banner />
          <div className="content">
            <div className="card text-center">
              <h2>Paixão</h2>
              <p>
                Andar sobre duas rodas não é apenas um hobby, e sim
                <strong>uma paixão</strong>
              </p>
              <img
                  src={velocimetro}
                  alt="picture description"
                  width="450"
              />
            </div>

            <div className="card text-center">
              <h2>Gostos</h2>
              <p>Não interessa a cilindrada, e sim <strong>a sua vontade</strong></p>
              <img
                  src={gostos}
                  alt="picture description"
                  width="450"
              />
            </div>

            <div className="card text-center">
              <h2>Quebras de paradigma</h2>
              <p>
                Este motoclube deseja quebrar a máxima de
                <strong>"todo motoqueiro cai e pilota sem respeitar os outros"</strong>
              </p>
              <img
                  src={paradigma}
                  alt="picture description"
                  width="450"
              />
            </div>

            <div className="card text-center">
              <h2>Amizade</h2>
              <p>
                Pois o que seria um motoclube
                <strong>sem a amizade entre os membros deste?</strong>
              </p>
              <img
                  src={amizade}
                  alt="picture description"
                  width="450"
              />
            </div>
          </div>
      </div>
    );
  }
}
