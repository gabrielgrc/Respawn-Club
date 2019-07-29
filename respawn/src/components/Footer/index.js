import React, { Component } from "react";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p>Mídias sociais do ©Respawn Club</p>
        <ul class="list-inline">
          <li>
            <a href="#">
              <i class="fab fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
