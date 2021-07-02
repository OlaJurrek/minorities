import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-bottom: 1em;
  padding-top: 3em;
  text-align: center;
`;

const StyledCopyright = styled.p`
  grid-column: 2 / 3;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 1.1em 0.7em 0;
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 0.9em;
  font-variation-settings: 'wdth' 500, 'wght' 450;

  ::before {
    position: absolute;
    content: '';
    width: 70%;
    height: 1px;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>Aleksandra Mętrak &copy; 2021</StyledCopyright>
  </StyledFooter>
);

export default Footer;
