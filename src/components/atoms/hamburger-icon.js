import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const StyledHamburgerIcon = styled.button`
  position: relative;
  width: 2.5em;
  height: 19px;
  margin-bottom: 2px;
  background-color: transparent;
  border: none;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${colors.black};
    border-radius: 30px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 10px;
    }

    &:nth-child(3) {
      top: 100%;
    }
  }
`;

const HamburgerIcon = () => (
  <StyledHamburgerIcon>
    <span></span>
    <span></span>
    <span></span>
  </StyledHamburgerIcon>
);

export default HamburgerIcon;
