import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Sidebar from '../molecules/sidebar';
import MobileNav from '../molecules/mobile-nav';
import Footer from '../atoms/footer';

const Main = styled.main`
  padding: 2.8em 0.8em 0;

  ${({ theme }) => theme.media.md`
    padding: 7em 2em 0;
  `}

  ${({ theme }) => theme.media.lg`
    padding: 7em 5em 0;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  ${({ theme }) => theme.media.md`
    grid-template-columns: 250px 1fr;
    grid-template-rows: none;
  `}

  ${({ theme }) => theme.media.lg`
    grid-template-columns: 320px 1fr;
  `}
`;

export default function Layout({ children, currentLang }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
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
    <Grid>
      <Sidebar
        homeLink={homeLink}
        currentLangKey={currentLang}
        isOpen={isMobileMenuOpen}
      />
      <MobileNav homeLink={homeLink} onOpenMenu={openMenu} />
      <Main id="mainContent">{children}</Main>
      <Footer />
    </Grid>
  );
}
