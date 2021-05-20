import React from 'react';

export default props => {
  // const { i18n } = useTranslation();
  // console.log('upper component', i18n, props.pageContext.language);

  // if (i18n.language !== props.pageContext.language) {
  //   i18n.changeLanguage(props.pageContext.language);
  // }

  return <div>{props.children}</div>;
};
