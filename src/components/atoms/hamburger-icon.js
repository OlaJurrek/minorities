import styled from 'styled-components';

export const HamburgerIcon = styled.button`
  position: relative;
  z-index: 6;
  width: 2.5em;
  height: 19px;
  margin-bottom: 5px;
  background-color: transparent;
  border: none;
  transition: 500ms ease-in-out;
  transform: translateX(
    ${props => (props.animate ? 'calc(100vw - 120px)' : 0)}
  );

  &:focus {
    outline: 0;
  }

  span {
    display: block;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 30px;
    opacity: 1;
    transition: 500ms ease-in-out;

    &:nth-child(1) {
      top: ${props => (props.animate ? '10px' : '0')};
      transform: rotate(${props => (props.animate ? '135deg' : '0deg')});
    }

    &:nth-child(2) {
      top: 10px;
      opacity: ${props => (props.animate ? '0' : '1')};
      transform: translateX(${props => (props.animate ? '-100%' : '0')});
    }

    &:nth-child(3) {
      top: ${props => (props.animate ? '10px' : '100%')};
      transform: rotate(${props => (props.animate ? '-135deg' : '0deg')});
    }
  }
`;
