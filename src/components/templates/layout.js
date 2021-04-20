import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import styled from 'styled-components';
import Sidebar from '../molecules/sidebar';
import GlobalStyle from '../../assets/styles/GlobalStyles';
import LanguageNav from '../molecules/language-nav';
import MobileNav from '../molecules/mobile-nav';

const Main = styled.main`
  padding: 2.8em 0.8em 3em;

  @media screen and (min-width: 768px) {
    padding: 7em 2em 3em;
  }

  @media screen and (min-width: 992px) {
    padding: 7em 5em 3em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: none;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 320px 1fr;
  }
`;

export default function Layout({ children, location, currentLang }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const openMenu = value => {
    setIsMobileMenuOpen(value);
  };

  return (
    <>
      <GlobalStyle />
      <Grid>
        <Sidebar
          homeLink={homeLink}
          currentLangKey={currentLangKey}
          isOpen={isMobileMenuOpen}
        />
        <MobileNav homeLink={homeLink} onOpenMenu={openMenu} />
        <LanguageNav langs={langsMenu} />
        <Main>{children}</Main>
      </Grid>
    </>
  );
}
