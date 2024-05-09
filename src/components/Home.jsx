import React from 'react';
import { FormattedMessage } from 'react-intl';
import profileImg from '../assets/images/profile.jpeg'
import resume from '../assets/files/SebastianRamirez_EN-Resume.pdf'
import '../styles/Home.css';

function Home() {
  return (
    <div className="FirstElement" id="home">
      <div className="profile-photo" data-aos="fade-right">
        <img src={profileImg} alt="profile picture" oncontextmenu="return false;"/>
      </div>
      <div className="profile-text" data-aos="fade-left">
        <h5><FormattedMessage id="home.greeting" /></h5>
        <br />
        <h1>Sebastián Ramírez</h1>
        <br />
        <p>
          <FormattedMessage id="home.description" />
        </p>
        <div className="btn-group">
          <a href={resume}
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
          <a href="https://www.linkedin.com/in/sebramirezm/" target="_blank">
            <i className="fa-brands fa-linkedin" alt="LinkedIn Profile"></i>
          </a>
          <a href="https://github.com/sebramirezm" target="_blank">
            <i className="fa-brands fa-github" alt="Github Repository"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;