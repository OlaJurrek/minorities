import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import styled from 'styled-components';
import Sidebar from '../sidebar';
import GlobalStyle from '../../assets/styles/GlobalStyles';
import LanguageNav from '../molecules/language-nav';

const Main = styled.main`
  padding: 7em 5em 3em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
`;

export default function Layout({ children, location, currentLang }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
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
  // console.log('data languages', data);
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
    <>
      <GlobalStyle />
      <Grid>
        <Sidebar />
        <LanguageNav langs={langsMenu} />
        <Main>{children}</Main>
      </Grid>
    </>
  );
}
