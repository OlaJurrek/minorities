import { Link } from 'gatsby';
import styled from 'styled-components';

export const MobileLogo = styled(Link)`
  display: inline-block;
  margin-right: 0.3em;
  font-size: 2.1em;
  font-family: ${({ theme }) => theme.fonts.plex};
  font-variation-settings: 'wght' 450;
  line-height: 1;
  visibility: ${({ animate }) => (animate ? 'hidden' : 'visible')};
`;
