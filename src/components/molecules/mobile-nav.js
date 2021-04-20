import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
// import HamburgerIcon from '../atoms/hamburger-icon';
import typography from '../../assets/styles/typography';
import colors from '../../assets/styles/colors';

const StyledHeader = styled.header`
  padding: 0.5em;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileLogo = styled(Link)`
  display: inline-block;
  margin-right: 0.3em;
  font-size: 2.1em;
  line-height: 1;
  font-family: ${typography.plex};
  font-variation-settings: 'wght' 450;
`;

const HamburgerIcon = styled.button`
  position: relative;
  width: 2.5em;
  height: 19px;
  margin-bottom: 2px;
  background-color: transparent;
  border: none;
  transform: rotate(0deg);
  transition: 500ms ease-in-out;
  z-index: 2;
  transform: translateX(
    ${props => (props.animate ? 'calc(100vw - 120px)' : 0)}
  );

  &:focus {
    outline: 0;
  }

  span {
    display: block;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background: ${colors.black};
    border-radius: 30px;
    opacity: 1;
    transition: 500ms ease-in-out;

    &:nth-child(1) {
      top: ${props => (props.animate ? '10px' : '0')};
      transform: rotate(${props => (props.animate ? '135deg' : '0deg')});
    }

    &:nth-child(2) {
      top: 10px;
      opacity: ${props => (props.animate ? '0' : '1')};
      transform: translateX(${props => (props.animate ? '-100%' : '0')});
    }

    &:nth-child(3) {
      top: ${props => (props.animate ? '10px' : '100%')};
      transform: rotate(${props => (props.animate ? '-135deg' : '0deg')});
    }
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
      {/* <HamburgerIcon onClick={handleClick} /> */}
      <HamburgerIcon onClick={handleClick} animate={animate}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </StyledHeader>
  );
};

export default MobileNav;
