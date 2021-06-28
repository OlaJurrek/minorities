import React from 'react';
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

const MobileSupplementalNav = ({ homeLink, isOpen, onToggleMenu }) => {
  const { t } = useTranslation();
  const data = useStaticQuery(mobileNavQuery);

  const handleClick = () => {
    onToggleMenu(isOpen => !isOpen);
  };

  return (
    <StyledWrapper>
      <MobileLogo
        {...isOpen}
        to={homeLink}
        tabIndex={isOpen ? '-1' : '0'}
      >
        {data.site.siteMetadata.shortTitle}
      </MobileLogo>
      <HamburgerIcon
        onClick={handleClick}
        isOpen={isOpen}
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

const mobileNavQuery = graphql`
query {
  site {
    siteMetadata {
      shortTitle
    }
  }
}
`;
