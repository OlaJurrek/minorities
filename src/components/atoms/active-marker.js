import React from 'react';
import styled from 'styled-components';

const Marker = styled.i`
  display: block;
  position: absolute;
  z-index: 2;
  width: 2em;
  height: 2em;
  margin-left: 1em;
  background-image: radial-gradient(
    ${({ theme }) => theme.colors.lightGrey} 35%,
    ${({ theme }) => theme.colors.dark} 39% 100%
  );
  border: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 50%;
  transform: translateY(${({ offset }) => offset}px);
  transition: transform 0.5s;
`;

export default function ActiveMarker({ offset }) {
  return <Marker offset={offset} />;
}
