import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Title = styled.h1`
  position: relative;
  z-index: 3;
  margin: 0;
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
  font-variation-settings: 'wght' 450, 'wdth' 85;

  @media screen and (min-width: 576px) {
    transform: translateY(-50%);
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const AnimatedTitle = ({ title, link }) => (
  <Title>
    <StyledLink to={link}>{title}</StyledLink>
  </Title>
);

export default AnimatedTitle;
