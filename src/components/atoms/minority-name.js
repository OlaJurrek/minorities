import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;

  :focus {
    outline-offset: 10px;
  }
`;

const StyledName = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.introText};

  ${({ theme }) => theme.media.sm`
      font-size: 1.33em;
      font-weight: 300;
      font-variation-settings: 'wght' 300, 'wdth' 100;
  `}
`;

const StyledAddition = styled.span`
  display: block;

  ${({ theme }) => theme.media.sm`
      font-size: 0.75em;
      line-height: 1.6;
  `}
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
