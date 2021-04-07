import React from 'react';
import styled from 'styled-components';
import typography from '../../assets/styles/typography';

const BiggerText = styled.p`
  margin: 0 0 1.4em;
  font-family: ${typography.plex};
  font-size: 1.375em;
  font-weight: 300;
  text-align: ${props => (props.alignment ? props.alignment : 'left')};
`;

export default BiggerText;
