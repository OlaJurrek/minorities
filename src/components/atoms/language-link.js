import React from "react";
import styled from "styled-components";
import colors from '../../assets/styles/colors';
import typography from '../../assets/styles/typography';

const StyledLink = styled.a`
    text-transform: uppercase;
    line-height: 1;
    font-family: ${typography.plex};
    font-size: 1.7em;
    font-weight: ${props => props.activeLink ? '450' : '300'};
    font-variation-settings: ${props => props.activeLink ? '"wght" 450' : '"wght" 300'};
    color: ${props => props.activeLink ? colors.black : colors.dark};
`;

const LanguageLink = ({lang, active}) => (
    <StyledLink activeLink={active} lang={lang}>{lang}</StyledLink>
);

export default LanguageLink;