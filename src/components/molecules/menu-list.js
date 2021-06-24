import styled from 'styled-components';

const MenuList = styled.ul`
  position: relative;
  margin: 0;
  font-variation-settings: 'wght' 380;

  li.white-text {
    background-color: ${({ theme }) => theme.colors.dark};
    position: relative;

    ${({ theme }) => theme.media.lg`
    ::before,
    ::after {
      position: absolute;
      content: '';
      top: 0;
      height: 100%;
    }

    ::before {
      width: 25px;
      right: -26px;
      background-color: ${({ theme }) => theme.colors.dark};
    }

    ::after {
      width: 1px;
      right: -1px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  `}
  }
`;

export default MenuList;
