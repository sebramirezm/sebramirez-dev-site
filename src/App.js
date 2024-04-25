import React, { useState, useEffect, useRef } from 'react';
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
import { initScrollReveal } from './utils/scrollReveal';

const resources = {
  en: English,
  es: Spanish,
  pt: Portuguese
};

function App() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(resources.en);
  const [isLoading, setIsLoading] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const initScrollRevealWrapper = () => {
      if (headerRef.current) { 
        const headerHeight = headerRef.current.offsetHeight;
        initScrollReveal(headerHeight);
      }
    };

    initScrollRevealWrapper();
    setIsLoading(false);
  }, []);

  const handleLanguageChange = (lang) => {
    setLocale(lang);
    setMessages(resources[lang]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        <Header ref={headerRef} onLanguageChange={handleLanguageChange} /> {/* Pasa la referencia al componente Header */}
        <Home />
        <About />
        <Education />
        <Experience />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;