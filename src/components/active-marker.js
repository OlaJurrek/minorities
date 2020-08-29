import React from "react";
import styled from "styled-components";

import colors from "../assets/styles/colors";

export default function ActiveMarker({ offset }) {
  return <Marker offset={offset} />;
}

const Marker = styled.i`
  display: block;
  position: absolute;
  z-index: 2;
  transition: transform 0.5s;
  width: 2em;
  height: 2em;
  background-image: radial-gradient(
    ${colors.lightGrey} 35%,
    ${colors.dark} 39% 100%
  );
  border: 1.5px solid ${colors.lightGrey};
  margin-left: 1em;
  border-radius: 50%;
  transform: translateY(${props => props.offset}px);
`;
