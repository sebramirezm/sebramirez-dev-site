import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Education.css';

function Education() {
  return (
    <section className="education-content" id="educations">
      <div className="container">
        <div className="education-title" data-aos="fade-up">
          <h4>
            <FormattedMessage id="education.title" />
          </h4>
        </div>
        <div className="educations">
          <div className="education" data-aos="fade-right">
            <i className="fa fa-laptop-code"></i>
            <h4><FormattedMessage id="education.programmer.title" /></h4>
            <p><FormattedMessage id="education.programmer.description" /></p>
            <p>
              <br /><FormattedMessage id="education.programmer.details" />
            </p>
          </div>
          <div className="education" data-aos="fade-left">
            <i className="fa fa-satellite-dish"></i>
            <h4><FormattedMessage id="education.telecom.title" /></h4>
            <p><FormattedMessage id="education.telecom.description" /></p>
            <p>
              <br /><FormattedMessage id="education.telecom.details" />
            </p>
          </div>
          <div className="education" data-aos="fade-right">
            <i className="fa fa-hand-holding-heart"></i>
            <h4><FormattedMessage id="education.volunteer.title" /></h4>
            <p><FormattedMessage id="education.volunteer.description" /></p>
            <p>
              <br /><FormattedMessage id="education.volunteer.details" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;