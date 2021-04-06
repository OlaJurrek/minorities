import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import colors from '../../assets/styles/colors';

const navMenuList = styled.ul`
  position: relative;
  margin: 0;
  font-variation-settings: 'wght' 380;

  li {
    div {
      display: inline-block;
      max-width: 12em;
      margin-left: 2em;
      padding: 0.5em 1em 0.5em 1.8em;
      border-left: solid 1.5px ${colors.dark};
    }
  }

  li.white-text {
    background-color: ${colors.dark};

    div {
      border-left: solid 1.5px ${colors.lightGrey};
    }
  }

  a {
    display: inline-block;
  }
`;

export default navMenuList;
