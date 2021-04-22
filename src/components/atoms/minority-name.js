import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledName = styled.p`
  display: flex;
  justify-content: center;
  margin: 1.2em 0;
  text-align: center;
  color: #1a1a1a;
`;

const MinorityName = ({ minority }) => {
  return (
    <Link to={`/${minority.slug}`}>
      <StyledName>{minority.name}</StyledName>
    </Link>
  );
};
export default MinorityName;
