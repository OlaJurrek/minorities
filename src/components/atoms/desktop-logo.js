import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 2.625em 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const StyledLogo = styled(Link)`
  font-size: 1.8em;
  font-weight: 200;
  font-variation-settings: 'wght' 200;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const DesktopLogo = ({ link, text }) => (
  <StyledWrapper>
    <StyledLogo to={link}>{text}</StyledLogo>
  </StyledWrapper>
);
