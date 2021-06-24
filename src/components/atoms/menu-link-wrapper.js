import styled from 'styled-components';

const MenuLinkWrapper = styled.div`
  margin-left: 2em;
  padding: 0.5em 1em 0.5em 1.8em;
  border-left: solid 1.5px
    ${({ theme, light }) =>
      light ? theme.colors.lightGrey : theme.colors.dark};
`;

export default MenuLinkWrapper;
