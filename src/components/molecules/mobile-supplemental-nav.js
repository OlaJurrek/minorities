import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { HamburgerIcon } from '../atoms/hamburger-icon';
import { MobileLogo } from '../atoms/mobile-logo';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -6.5em;
  visibility: visible;
  padding: 0.5em;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.md`
    display: none;
  `}
`;

const MobileSupplementalNav = ({ homeLink, onOpenMenu }) => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shortTitle
        }
      }
    }
  `);

  const handleClick = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
    onOpenMenu(isSidebarOpen => !isSidebarOpen);
  };

  return (
    <StyledWrapper>
      <MobileLogo
        {...isSidebarOpen}
        to={homeLink}
        tabIndex={isSidebarOpen ? '-1' : '0'}
      >
        {data.site.siteMetadata.shortTitle}
      </MobileLogo>
      <HamburgerIcon
        onClick={handleClick}
        animate={isSidebarOpen}
        aria-label={t('openMenu')}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </HamburgerIcon>
    </StyledWrapper>
  );
};

export default MobileSupplementalNav;
