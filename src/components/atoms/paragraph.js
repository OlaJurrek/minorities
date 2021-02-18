import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
    margin: 0 0 1.5em;
    font-size: 1.05em;
    font-weight: 300;
`;

const Paragraph = ({text}) => (
    <StyledParagraph>{text}</StyledParagraph> 
);

export default Paragraph;