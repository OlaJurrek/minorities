import { Link } from 'gatsby';
import styled from 'styled-components';

export const MenuLink = styled(Link)`
  display: inline-block;
  max-width: 12em;
  margin-left: 2em;
  padding: 0.5em 1em 0.5em 1.8em;
  border-left: solid 1.5px
    ${({ theme, light }) =>
      light ? theme.colors.lightGrey : theme.colors.dark};
  color: ${({ theme, light }) =>
    light ? theme.colors.lightGrey : theme.colors.black};

  :focus {
    outline: 2px solid
      ${({ theme, light }) =>
        light ? theme.colors.lightOrange : theme.colors.orange};
  }
`;
