import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Title = styled.h1`
  position: relative;
  z-index: 3;
  margin: 0;
  font-size: 2em;
  font-weight: 300;
  font-variation-settings: 'wght' 450, 'wdth' 85;
  text-transform: uppercase;

  ${({ theme }) => theme.media.sm`
    transform: translateY(-50%);
  `}
`;

const AnimatedTitle = ({ title, link }) => (
  <Title>
    <Link to={link}>{title}</Link>
  </Title>
);

export default AnimatedTitle;
