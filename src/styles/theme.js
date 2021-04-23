import { css } from 'styled-components';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const theme = {
  colors: {
    lightGrey: '#EEEDED',
    dark: '#5E5E5E',
    black: '#0d0d0d',
    introText: '#1a1a1a',
    white: '#fff',
    orange: '#e4620e',
    pink: '#b04c90',
  },
  fonts: {
    plex: "'Plex', sans-serif",
    poppins: "'Poppins', sans-serif",
  },
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {}),
};
