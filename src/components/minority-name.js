import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// import "typeface-ibm-plex-sans";

const Name = styled.p`
  margin: 1.2em 0;
  text-align: center;
  //   font-family: "IBM Plex Sans", sans-serif;
  color: #1a1a1a;
`;

const MinorityName = ({ name }) => {
  //   console.log(name);
  return (
    <Link to="/">
      <Name>{name}</Name>
    </Link>
  );
};
export default MinorityName;
