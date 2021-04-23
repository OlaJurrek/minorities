import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
`;

const StyledName = styled.p`
  margin: 1.2em 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.introText};

  @media screen and (min-width: 576px) {
    font-size: 1.33em;
    font-weight: 300;
    font-variation-settings: 'wght' 300, 'wdth' 100;
  }
`;

const StyledAddition = styled.span`
  display: block;

  @media screen and (min-width: 576px) {
    font-size: 0.75em;
    line-height: 1.6;
  }
`;

const MinorityName = ({ minority: { slug, name, addition } }) => {
  return (
    <StyledLink to={`/${slug}`}>
      <StyledName>
        {name}
        {addition && <StyledAddition>{addition}</StyledAddition>}
      </StyledName>
    </StyledLink>
  );
};
export default MinorityName;
