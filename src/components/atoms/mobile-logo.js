import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import typography from '../../assets/styles/typography';

export const MobileLogo = styled(Link)`
  display: inline-block;
  margin-right: 0.3em;
  font-size: 2.1em;
  line-height: 1;
  font-family: ${typography.plex};
  font-variation-settings: 'wght' 450;
`;
