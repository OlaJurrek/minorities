import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import LangsAndStylesProvider from './langs-and-styles-provider';
import Sidebar from '../molecules/sidebar';
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
    query BasicQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
          }
        }
      }
    }
  `);

  const { defaultLangKey } = data.site.siteMetadata.languages;
  const homeLink = `/${currentLang}/`.replace(`/${defaultLangKey}/`, '/');

  const openMenu = value => {
    setIsMobileMenuOpen(value);
  };

  return (
    <LangsAndStylesProvider location={location} currentLang={currentLang}>
      <Grid>
        <Sidebar
          homeLink={homeLink}
          currentLangKey={currentLang}
          isOpen={isMobileMenuOpen}
        />
        <MobileNav homeLink={homeLink} onOpenMenu={openMenu} />
        <Main>{children}</Main>
      </Grid>
    </LangsAndStylesProvider>
  );
}
