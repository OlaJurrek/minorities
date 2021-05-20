const React = require('react');
const TranslationProvider = require('./src/components/providers/translation-provider')
  .default;

exports.wrapRootElement = props => {
  return <TranslationProvider>{props.element}</TranslationProvider>;
};
