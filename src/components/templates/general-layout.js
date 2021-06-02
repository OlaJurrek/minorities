import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import GlobalStyle from '../../styles/GlobalStyle';
import LanguageNav from '../molecules/language-nav';
import SkipLink from '../atoms/skip-link';

const GeneralLayout = ({ contentPage, children, currentLang, location }) => {
  const { i18n } = useTranslation();

  const data = useStaticQuery(graphql`
    query providerQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey {
              pathCode
            }
            langs {
              pathCode
            }
          }
        }
      }
    }
  `);

  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const languagesList = langs.map(lang => lang.pathCode);
  const currentLangKey = currentLang;
  const homeLink = `/${currentLangKey}/`.replace(
    `/${defaultLangKey.pathCode}/`,
    '/'
  );
  const langsMenu = getLangs(
    languagesList,
    currentLangKey,
    getUrlForLang(homeLink, url)
  ).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey.pathCode}/`, '/'),
  }));

  useEffect(() => {
    if (i18n.language !== currentLangKey) {
      i18n.changeLanguage(currentLangKey);
    }
  }, [currentLangKey, i18n]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {contentPage && <SkipLink />}
      <LanguageNav langs={langsMenu} />
      {children}
    </ThemeProvider>
  );
};

export default GeneralLayout;
