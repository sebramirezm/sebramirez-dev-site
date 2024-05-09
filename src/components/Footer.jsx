import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <small className="message"><FormattedMessage id="footer.message" /></small>
      <small className="copyright">&copy; Copyright 2024</small>
    </footer>
  );
}

export default Footer;