import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p>Mídias sociais do ©Respawn Club</p>
        <ul className="list-inline">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
