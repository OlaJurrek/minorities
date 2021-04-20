import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { HamburgerIcon } from '../atoms/hamburger-icon';
import { MobileLogo } from '../atoms/mobile-logo';

const StyledHeader = styled.header`
  padding: 0.5em;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = ({ homeLink, onOpenMenu }) => {
  const [animate, setAnimate] = useState(false);
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
    setAnimate(animate => !animate);
    onOpenMenu(animate => !animate);
  };

  return (
    <StyledHeader>
      <MobileLogo to={homeLink}>{data.site.siteMetadata.shortTitle}</MobileLogo>
      <HamburgerIcon onClick={handleClick} animate={animate}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </StyledHeader>
  );
};

export default MobileNav;
