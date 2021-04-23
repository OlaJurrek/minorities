import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: uppercase;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 1.2em;
  font-weight: ${({ selected }) => (selected ? '450' : '300')};
  font-variation-settings: ${({ selected }) =>
    selected ? '"wght" 450' : '"wght" 300'};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.black : theme.colors.dark};

  @media screen and (min-width: 992px) {
    font-size: 1.7em;
  }
`;

const LanguageLink = props => (
  <StyledLink {...props} to={props.link}>
    {props.lang}
  </StyledLink>
);

export default LanguageLink;
