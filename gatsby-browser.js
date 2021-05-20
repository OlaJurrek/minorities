const React = require('react');
const TranslationProvider = require('./src/components/providers/translation-provider')
  .default;

exports.wrapRootElement = ({ element }) => {
  return <TranslationProvider>{element}</TranslationProvider>;
};
