import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import { useTranslation } from 'react-i18next';
import StylesProvider from '../providers/styles-provider';
import LanguageNav from '../molecules/language-nav';
import SkipLink from '../atoms/skip-link';

const GeneralLayout = ({ contentPage, children, currentLang, location }) => {
  const { i18n } = useTranslation();

  const data = useStaticQuery(graphql`
    query providerQuery {
      site {
        siteMetadata {
          i18nConfig {
            defaultLanguage {
              pathCode
            }
            languages {
              pathCode
              isoCode
            }
          }
        }
      }
    }
  `);

  const url = location.pathname;
  const { languages, defaultLanguage } = data.site.siteMetadata.i18nConfig;
  const languagesList = languages.map(lang => lang.pathCode);
  const currentLangKey = currentLang;
  const homeLink = `/${currentLangKey}/`.replace(
    `/${defaultLanguage.pathCode}/`,
    '/'
  );
  const langsMenu = getLangs(
    languagesList,
    currentLangKey,
    getUrlForLang(homeLink, url)
  ).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLanguage.pathCode}/`, '/'),
    isoCode: languages.find(lang => lang.pathCode === item.langKey).isoCode,
  }));

  useEffect(() => {
    if (i18n.language !== currentLangKey) {
      i18n.changeLanguage(currentLangKey);
    }
  }, [currentLangKey, i18n]);

  return (
    <StylesProvider>
      <nav>
        {contentPage && <SkipLink />}
        <LanguageNav languages={langsMenu} />
      </nav>
      {children}
    </StylesProvider>
  );
};

export default GeneralLayout;
