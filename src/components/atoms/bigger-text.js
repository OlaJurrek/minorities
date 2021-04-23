import React from 'react';
import styled from 'styled-components';

const StyledBiggerText = styled.p`
  margin: 0 0 1.4em;
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 1.2em;
  font-weight: 300;
  text-align: ${({ alignment }) => (alignment ? alignment : 'left')};

  @media screen and (min-width: 786px) {
    font-size: 1.375em;
    margin: 0 0 1.4em;
  }
`;

const BiggerText = props => {
  return <StyledBiggerText {...props}>{props.text}</StyledBiggerText>;
};

export default BiggerText;
