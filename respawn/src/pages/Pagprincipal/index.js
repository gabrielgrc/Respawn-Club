import React, { Component } from "react";
import "./style.css";
import Banner from "../../components/Banner"
import Cardtextcenter from "../../components/Cardtextcenter"
import Footer from "../../components/Footer"
import Footer2 from "../../components/Footer2"

export default class Pagprincipal extends Component {
    render() {
      return (
          <div>
              <Banner/>
              <Cardtextcenter/>
              <Footer/>
              <Footer2/>
          </div>
      );
    }
  } 