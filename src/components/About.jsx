import React from 'react';
import { FormattedMessage } from 'react-intl';
import skillsData from '../utils/skills.json';
import '../styles/About.css';

function About() {

  const skillButtons = skillsData.map((skill, index) => (
    <button key={index} className="btn active" data-aos="fade-up">
      {skill}
    </button>
  ));
  return (
    <section className="about-area" id="about">
      <div className="container">
        <div className="about">
          <div className="about-content" data-aos="fade-right">
            <h4><FormattedMessage id="about.title"/></h4>
            <ul>
              <li>
                <FormattedMessage id="about.description1" />
              </li>
              <li>
                <FormattedMessage id="about.description2" />
              </li>
            </ul>
          </div>
          <div className="about-skills" data-aos="fade-left">
            <ul>
              <li>
                <FormattedMessage id="about.from" />
              </li>
              <li>
                <FormattedMessage id="about.languages" />
              </li>
              <li>
                <FormattedMessage id="about.email" />
              </li>
              <li>
                <FormattedMessage id="about.availability" />
              </li>
              <li>
                <FormattedMessage id="about.experience" />
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-buttons-container">
          <h5 className="skill-title">
            <FormattedMessage id="about.skillTitle" />
          </h5>
          <div className="skill-buttons" data-aos="zoom-out-up">{skillButtons}</div>
        </div>
      </div>
    </section>
  );
}

export default About;