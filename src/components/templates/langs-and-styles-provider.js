import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import GlobalStyle from '../../styles/GlobalStyle';
import LanguageNav from '../molecules/language-nav';

const LangsAndStylesProvider = ({ children, location, currentLang }) => {
  const data = useStaticQuery(graphql`
    query providerQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `);

  console.log('theme', theme);

  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const currentLangKey = currentLang;
  const homeLink = `/${currentLangKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(
    langs,
    currentLangKey,
    getUrlForLang(homeLink, url)
  ).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/'),
  }));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <LanguageNav langs={langsMenu} />
        {children}
      </>
    </ThemeProvider>
  );
};

export default LangsAndStylesProvider;
