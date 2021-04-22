import React from 'react';
import styled from 'styled-components';
import LanguageLink from '../atoms/language-link';
import colors from '../../assets/styles/colors';

const StyledNav = styled.ul`
  position: absolute;
  top: 0;
  right: 0em;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  z-index: 4;

  @media screen and (min-width: 992px) {
    right: 3em;
  }
`;

const StyledNavItem = styled.li`
  padding: 0.7em 1.1em 0.6em;

  @media screen and (min-width: 768px) {
    padding: 1.25em 1.8em 1.5em;
  }

  &:not(:first-of-type) {
    border-left: solid 2px ${colors.dark};
  }
`;

const LanguageNav = props => {
  const links = props.langs.map(lang => (
    <StyledNavItem key={lang.langKey}>
      <LanguageLink
        lang={lang.langKey}
        link={lang.link}
        selected={lang.selected}
      ></LanguageLink>
    </StyledNavItem>
  ));

  return <StyledNav>{links}</StyledNav>;
};

export default LanguageNav;
