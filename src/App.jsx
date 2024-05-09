import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IntlProvider } from 'react-intl';
import English from './i18n/translations/en.json';
import Spanish from './i18n/translations/es.json';
import Portuguese from './i18n/translations/pt.json';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/App.css';

const resources = {
  en: English,
  es: Spanish,
  pt: Portuguese
};

function App() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(resources.en);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  

  useEffect(() => {
    AOS.init({
      once: true, // Solo anima una vez
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de animación
    });
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        const currentScrollPos = window.pageYOffset;
        setShowScrollToTop(currentScrollPos >= aboutSectionTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setLocale(lang);
    setMessages(resources[lang]);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        <Header onLanguageChange={handleLanguageChange} />
        <Home />
        <About />
        <Education />
        <Experience />
        <Footer />
        <div
          className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`}
          onClick={handleScrollToTop}
        >
          <i className="fa fa-arrow-up"></i>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;