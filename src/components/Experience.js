import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience-content" id="experience">
      <div className="container">
        <div className="experience-title">
          <h4>
            <FormattedMessage id="experience.title" />
          </h4>
        </div>
        <div className="experience">
          <div className="timeline-box">
            <h3 className="title">
              <FormattedMessage id="experience.globant.title" />
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.globant.backend1.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.globant.backend1.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.globant.backend1.description" />
                </li>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.globant.backend2.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.globant.backend2.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.globant.backend2.description" />
                </li>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.globant.java.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.globant.java.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.globant.java.description" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="internship">
          <div className="timeline-box">
            <h3 className="title">
              <FormattedMessage id="experience.people23.title" />
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.people23.software.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.people23.software.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.people23.software.description" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="internship">
          <div className="timeline-box">
            <h3 className="title">
              <FormattedMessage id="experience.advise.title" />
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.advise.fullstack.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.advise.fullstack.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.advise.fullstack.description" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="internship">
          <div className="timeline-box">
            <h3 className="title">
              <FormattedMessage id="experience.paimasa.title" />
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.paimasa.it.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.paimasa.it.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.paimasa.it.description" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="internship">
          <div className="timeline-box">
            <h3 className="title">
              <FormattedMessage id="experience.tradition.title" />
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.tradition.systems.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.tradition.systems.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.tradition.systems.description" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="internship">
          <div className="timeline-box">
            <h3 className="title">
              <FormattedMessage id="experience.belltech.title" />
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">
                  <FormattedMessage id="experience.belltech.trading.title" />
                </h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i>{' '}
                  <FormattedMessage id="experience.belltech.trading.date" />
                </h4>
                <li className="timeline-text">
                  <FormattedMessage id="experience.belltech.trading.description" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;