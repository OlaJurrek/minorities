import styled from 'styled-components';

export const HamburgerIcon = styled.button`
  position: relative;
  z-index: 6;
  width: 2.5em;
  height: 23px;
  margin-bottom: 6px;
  background-color: transparent;
  border: none;
  transform: translateX(${props => (props.animate ? '-105px' : 0)});

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 5px;
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
      top: ${props => (props.animate ? '10px' : '20px')};
      transform: rotate(${props => (props.animate ? '-135deg' : '0deg')});
    }
  }
`;
