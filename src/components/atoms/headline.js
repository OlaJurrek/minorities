import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  margin: 0 0 1.6em;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 1.6em;
  line-height: 1.2;
  font-weight: 350;
  font-variation-settings: 'wght' 450;

  @media screen and (min-width: 768px) {
    margin: 0 0 1.3em;
    font-size: 1.8em;
    font-variation-settings: 'wght' 350;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2em;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2.375em;
  }
`;

const Headline = ({ text }) => <StyledHeadline>{text}</StyledHeadline>;

export default Headline;
