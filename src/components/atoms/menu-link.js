import { Link } from 'gatsby';
import styled from 'styled-components';

export const MenuLink = styled(Link)`
  display: inline-block;
  max-width: 12em;
  color: ${({ theme, light }) =>
    light ? theme.colors.lightGrey : theme.colors.black};

  :focus {
    outline: 2px solid
      ${({ theme, light }) =>
        light ? theme.colors.lightOrange : theme.colors.orange};
    outline-offset: 4px;
  }
`;
