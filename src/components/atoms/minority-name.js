import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import colors from '../../assets/styles/colors';

const StyledLink = styled(Link)`
  display: block;
`;

const StyledName = styled.p`
  /* display: flex; */
  /* justify-content: center; */
  margin: 1.2em 0;
  text-align: center;
  color: ${colors.introText};

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

const MinorityName = ({ minority }) => {
  console.log(minority);
  return (
    <StyledLink to={`/${minority.slug}`}>
      <StyledName>
        {minority.name}
        {minority.addition && (
          <StyledAddition>{minority.addition}</StyledAddition>
        )}
      </StyledName>
    </StyledLink>
  );
};
export default MinorityName;
