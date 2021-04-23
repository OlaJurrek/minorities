import React from 'react';
import styled from 'styled-components';

const Marker = styled.i`
  display: block;
  position: absolute;
  z-index: 2;
  transition: transform 0.5s;
  width: 2em;
  height: 2em;
  background-image: radial-gradient(
    ${({ theme }) => theme.colors.lightGrey} 35%,
    ${({ theme }) => theme.colors.dark} 39% 100%
  );
  border: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
  margin-left: 1em;
  border-radius: 50%;
  transform: translateY(${({ offset }) => offset}px);
`;

export default function ActiveMarker({ offset }) {
  return <Marker offset={offset} />;
}
