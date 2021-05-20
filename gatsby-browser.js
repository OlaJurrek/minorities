const React = require('react');
const TranslationProvider = require('./src/components/providers/translation-provider')
  .default;
const LangsAndStylesProvider = require('./src/components/providers/langs-and-styles-provider')
  .default;

exports.wrapPageElement = ({ element, props }) => {
  return <LangsAndStylesProvider {...props}>{element}</LangsAndStylesProvider>;
};

exports.wrapRootElement = ({ element }) => {
  return <TranslationProvider>{element}</TranslationProvider>;
};
