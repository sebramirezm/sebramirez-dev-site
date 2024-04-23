import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/About.css';

function About() {
  return (
    <section className="about-area" id="about">
      <div className="container">
        <div className="about">
          <div className="about-content">
            <h4><FormattedMessage id="about.title" /></h4>
            <ul>
              <li>
                <FormattedMessage id="about.description1" />
              </li>
              <li>
                <FormattedMessage id="about.description2" />
              </li>
            </ul>
          </div>
          <div className="about-skills">
          <ul>
              <li>
                <FormattedMessage id="about.name" />
              </li>
              <li>
                <FormattedMessage id="about.age" />
              </li>
              <li>
                <FormattedMessage id="about.from" />
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
      </div>
    </section>
  );
}

export default About;