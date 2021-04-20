import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../../static/images/facebook.svg';

const StyledLink = styled.a`
  display: inline-block;
  padding: 0.5em;
`;

const Facebook = () => {
  return (
    <StyledLink href="https://www.facebook.com/" target="_blank">
      <FacebookIcon />
    </StyledLink>
  );
};

export default Facebook;
