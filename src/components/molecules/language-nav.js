import React from 'react';
import styled from 'styled-components';
import LanguageLink from '../atoms/language-link';

const StyledNav = styled.ul`
  position: absolute;
  top: 0;
  right: 0em;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 4;

  ${({ theme }) => theme.media.lg`
    right: 3em;
  `}
`;

const StyledNavItem = styled.li`
  padding: 0.7em 1.1em 0.6em;

  ${({ theme }) => theme.media.md`
    padding: 1.25em 1.8em 1.5em;
  `}

  :not(:first-of-type) {
    border-left: solid 2px ${({ theme }) => theme.colors.dark};
  }
`;

const LanguageNav = ({ languages }) => {
  const links = languages.map(language => (
    <StyledNavItem key={language.langKey}>
      <LanguageLink
        lang={language.langKey}
        link={language.link}
        selected={language.selected}
      ></LanguageLink>
    </StyledNavItem>
  ));

  return <StyledNav>{links}</StyledNav>;
};

export default LanguageNav;
