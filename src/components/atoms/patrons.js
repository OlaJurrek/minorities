import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0 0;

  ${({ theme }) => theme.media.sm`
    flex-direction: row;
    justify-content: space-between;
    margin: 7em 0 0;
  `}
`;

const StyledFigure = styled.figure`
  width: 300px;
  margin-bottom: 2em;

  ${({ theme }) => theme.media.sm`
    width: 280px;
    margin-bottom: 0;
`}

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Patrons = ({ patron1, patron2 }) => {
  return (
    <StyledWrapper>
      <StyledFigure>
        <Img fluid={patron1.childImageSharp.fluid} />
      </StyledFigure>
      <StyledFigure>
        <img
          src={patron2.publicURL}
          alt="Instytut Slawistyki Polskiej Akademii Nauk"
        />
      </StyledFigure>
    </StyledWrapper>
  );
};

export default Patrons;
