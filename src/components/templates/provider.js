import React from 'react';
import { I18nextProvider, withTranslation } from 'react-i18next';
import i18next from '../../i18n/config';

const Provider = ({ children }) => {
  console.log('trans provider i18n');

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

// export default ({ element }) => <Provider>{element}</Provider>;
export default Provider;
