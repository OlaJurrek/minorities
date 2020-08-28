import React from "react";
import styled from "styled-components";

import colors from "../assets/styles/colors";

export default function ActiveMarker(props) {
  return <Marker offset={props.offset} />;
}

const Marker = styled.i`
  display: block;
  position: absolute;
  z-index: 2;
  transition: transform 0.5s;
  width: 2em;
  height: 2em;
  background-color: pink;
  background-image: radial-gradient(
    ${props => (props.background === "isDark" ? colors.dark : colors.white)} 35%,
    ${props => (props.background === "isDark" ? colors.white : colors.dark)} 39%
      100%
  );
  margin-left: 1em;
  border-radius: 50%;
  transform: translateY(${props => props.offset}px);
`;
