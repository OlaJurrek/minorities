import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import * as i18nConfig from '../../i18n/i18n-config';

const TranslationProvider = ({ children }) => {
  i18next.init({
    fallbackLng: 'pl',
    resources: {
      cz: {
        translations: require('../../i18n/cz/translations.json'),
      },
      pl: {
        translations: require('../../i18n/pl/translations.json'),
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

  const languagesList = i18nConfig.languages.map(lang => lang.pathCode);

  i18next.languages = languagesList;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export default TranslationProvider;
