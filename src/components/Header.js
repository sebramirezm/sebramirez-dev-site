import React, { useState, useEffect, forwardRef } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import '../styles/Header.css';

const Header = forwardRef((props, ref) => { // Utiliza forwardRef para permitir que el componente reciba una referencia
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (language) => {
    console.log('Cambiando idioma a:', language);
    props.onLanguageChange(language);
    setCurrentLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition === 0) {
        setActiveSection('home');
        return;
      }

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const target = section.getAttribute('id');
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= offset - 40 && scrollPosition < offset + height - 40) {
          setActiveSection(target);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header ref={ref} className={`header-area ${isSticky ? 'sticky' : ''}`}> {/* Pasa la referencia al elemento header */}
      <div className="container">
        <div className="header">
          <a href="" className="logo">
            <img src="files/signature.png" alt="" className="signature" />
            <i className="fa fa-bolt"></i>
          </a>
          <ul className="navbar">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                <FormattedMessage id="header.home" />
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                <FormattedMessage id="header.about" />
              </a>
            </li>
            <li>
              <a
                href="#educations"
                className={activeSection === 'educations' ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, 'educations')}
              >
                <FormattedMessage id="header.education" />
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, 'experience')}
              >
                <FormattedMessage id="header.experience" />
              </a>
            </li>
            <li className="language-menu">
              <button className="language-menu-toggle" onClick={toggleLanguageMenu}>
                <img src={`files/${currentLanguage}.png`} alt={currentLanguage} className="flag-icon" />
              </button>
              {isLanguageMenuOpen && (
                <ul className="language-submenu">
                  <li onClick={() => changeLanguage('en')}>
                    <img src="files/en.png" alt="English" className="flag-icon" />
                  </li>
                  <li onClick={() => changeLanguage('es')}>
                    <img src="files/es.png" alt="Español" className="flag-icon" />
                  </li>
                  <li onClick={() => changeLanguage('pt')}>
                    <img src="files/pt.png" alt="Português" className="flag-icon" />
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="menu_icon">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
});

export default injectIntl(Header);