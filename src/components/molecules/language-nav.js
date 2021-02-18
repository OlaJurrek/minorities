import React from 'react';
import styled from "styled-components";
import LanguageLink from '../atoms/language-link';
import colors from '../../assets/styles/colors';

const StyledNav = styled.ul`
    position: fixed;
    top: 0;
    right: 3em;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

const StyledNavItem = styled.li`
    padding: 1.25em 1.8em 1.5em;

    &:not(:first-of-type) {
        border-left: solid 2px ${colors.dark};
    }
`

const LanguageNav = () => (
    <StyledNav>
        <StyledNavItem><LanguageLink active lang="pl"/></StyledNavItem>
        <StyledNavItem><LanguageLink lang="cz"/></StyledNavItem>
    </StyledNav>
);

export default LanguageNav;
