import React, { useState, useEffect, forwardRef } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import '../styles/Header.css';

const Header = forwardRef((props, ref) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const availableLanguages = ['en', 'es', 'pt'];

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (language) => {
    props.onLanguageChange(language);
    setCurrentLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
      updateActiveSection();
      setIsMenuOpen(false);
      setIsLanguageMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  return (
    <header ref={ref} className={`header-area ${isSticky ? 'sticky' : ''}`}>
      <div className="container" >
        <div className="header">
          <a href="" className="logo">
            <img src="files/signature.png" alt="" className="signature" />
            <i className="fa fa-bolt"></i>
          </a>
          <div className="menu-container">
            <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
              <li>
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
            </ul>
            <div className="language-menu">
              <button className="language-menu-toggle" onClick={toggleLanguageMenu}>
                <img src={`files/${currentLanguage}.png`} alt={currentLanguage} className="flag-icon" />
              </button>
              {isLanguageMenuOpen && (
                <ul className="language-submenu">
                  {availableLanguages
                    .filter((lang) => lang !== currentLanguage)
                    .map((lang) => (
                      <li key={lang} onClick={() => changeLanguage(lang)}>
                        <img src={`files/${lang}.png`} alt={lang} className="flag-icon" />
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
          <div className="menu_icon" onClick={toggleMenu}>
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </div>
    </header>
  );
});

export default injectIntl(Header);