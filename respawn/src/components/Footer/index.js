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
          <div id="youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </li>
          <li>
            <div id="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </li>
          <li>
            <div id = "twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </li>
          <li>
            <div id = "instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
