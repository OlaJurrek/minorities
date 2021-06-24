import styled, { css, keyframes } from 'styled-components';

const makeInvisible = keyframes`
  0% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
`;

const makeVisible = keyframes`
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
`;

const visibilityMixin = css`
  animation-delay: ${({ isOpen }) => (isOpen ? '0.3s' : '0s')};
  animation-duration: 0s;
  animation-name: ${({ isOpen }) => (isOpen ? makeVisible : makeInvisible)};
  animation-fill-mode: forwards;
`;

const StyledAside = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5em;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  grid-row: 1 / 3;
  ${visibilityMixin}

  ${({ theme }) => theme.media.md`
    position: static;
    visibility: visible;
    transform: none;
    padding-bottom: 1em;
    animation-name: none;
  `}

  ${({ theme }) => theme.media.lg`
    border-right: 1px solid ${({ theme }) => theme.colors.dark};
  `}

  nav {
    width: 100%;
    flex-grow: 1;
  }
`;

export default StyledAside;
