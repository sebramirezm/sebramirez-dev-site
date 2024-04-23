import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    initScrollReveal();
  }, []);

  const handleLanguageChange = (lang) => {
    setLocale(lang);
    setMessages(resources[lang]);
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
      </div>
    </IntlProvider>
  );
}

export default App;