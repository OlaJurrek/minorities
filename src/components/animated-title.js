import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Title = styled.h1`
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
  font-variation-settings: "wght" 450, "wdth" 85;

  a {
    color: inherit;
  }
`;

const AnimatedTitle = ({ title }) => (
  <Title>
    <Link to="/about/">{title}</Link>
  </Title>
);

export default AnimatedTitle;
