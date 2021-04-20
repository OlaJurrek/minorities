import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import FacebookIcon from '../../../static/images/facebook.svg';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5em;
`;

const Facebook = () => {
  return (
    <StyledLink to="https://www.facebook.com/">
      <FacebookIcon />
    </StyledLink>
  );
};

export default Facebook;
