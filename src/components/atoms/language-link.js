import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import typography from '../../assets/styles/typography';

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: uppercase;
  line-height: 1;
  font-family: ${typography.plex};
  font-size: 1.2em;
  font-weight: ${props => (props.selected ? '450' : '300')};
  font-variation-settings: ${props =>
    props.selected ? '"wght" 450' : '"wght" 300'};
  color: ${props => (props.selected ? colors.black : colors.dark)};

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
