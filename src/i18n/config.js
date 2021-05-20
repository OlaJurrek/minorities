import i18next from 'i18next';

// i18next.init({
//     fallbackLng: 'en',
//     resources: {
//         'zh-Hant': {
//             translations: require('../locales/tw/translations.json')
//         },
//         en: {
//             translations: require('../locales/en/translations.json')
//         }
//     },
//     ns: ['translations'],
//     defaultNS: 'translations',
//     returnObjects: true,
//     debug: process.env.NODE_ENV === 'development',
//     interpolation: {
//         escapeValue: false, // not needed for react!!
//     },
//     react: {
//         wait: true,
//     },
// });

i18next.init({
  fallbackLng: 'pl',
  resources: {
    cz: {
      translations: require('../locales/cz/translations.json'),
    },
    pl: {
      translations: require('../locales/pl/translations.json'),
    },
  },
  // lng: currentLangKey,
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    useSuspense: true,
  },
});

i18next.languages = ['pl', 'cz'];

export default i18next;
