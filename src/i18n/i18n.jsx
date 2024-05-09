import { IntlProvider } from 'react-intl';
import English from './locale/en.json';
import Spanish from './locale/es.json';
import Portugese from './locale/pt.json';

const resources = {
  en: English,
  es: Spanish,
  pt: Portugese
};

const i18n = (Component, props) => {
  const locale = navigator.language.split('-')[0];
  const messages = resources[locale] || resources['en'];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props} />
    </IntlProvider>
  );
};

export default i18n;