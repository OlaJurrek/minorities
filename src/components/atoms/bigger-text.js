import React from 'react';
import styled from 'styled-components';
import typography from '../../assets/styles/typography';

const BiggerText = styled.p`
  margin: 0 0 1.4em;
  font-family: ${typography.plex};
  font-size: 1.2em;
  font-weight: 300;
  text-align: ${props => (props.alignment ? props.alignment : 'left')};

  @media screen and (min-width: 786px) {
    font-size: 1.375em;
    margin: 0 0 1.4em;
  }
`;

export default BiggerText;
