import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import '../styles/Home.css';

function Home() {
  return (
    <div className="FirstElement" id="home">
      <div className="profile-photo">
        <img src="files/profile.jpeg" alt="profile picture" />
      </div>
      <div className="profile-text">
        <h5><FormattedMessage id="home.greeting" /></h5>
        <br />
        <h1>Sebastián Ramírez</h1>
        <br />
        <p>
          <FormattedMessage id="home.description" />
        </p>
        <div className="btn-group">
          <a href="files/SebastianRamirez_EN-Resume.pdf" 
            className="btn active" 
            target="_blank"
            rel="noopener noreferrer">
            <FormattedMessage id="home.downloadCv" />
          </a>
          <a href="mailto:s.ramirexm@gmail.com" className="btn">
            <FormattedMessage id="home.contact" />
          </a>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/sebramirezm/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/sebramirezm">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;