import React from "react";
import styled from "styled-components";
import colors from '../../assets/styles/colors';
import typography from "../../assets/styles/typography";

const StyledHeadline = styled.h1`
    margin: 0 0 1.3em;
    text-align: center;
    color: ${colors.black};
    font-family: ${typography.plex};
    font-size: 2.375em;
    font-weight: 350;
    font-variation-settings: "wght" 350;
`;

const Headline = ({text}) => (
    <StyledHeadline>{text}</StyledHeadline>
);

export default Headline;
