import { createGlobalStyle } from 'styled-components';
import 'fontsource-poppins/300.css';
import 'fontsource-poppins/300-italic.css';
import 'fontsource-poppins/500.css';

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::before,
::after {
  vertical-align: inherit;
}

html {
  cursor: default;
  line-height: 1.5;
  -moz-tab-size: 4;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  word-break: break-word;
}

body {
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
}

p {
  margin: 0 0 1em;
}

a {
  text-decoration: none;
  color: inherit;
}

a:focus, button:focus {
  outline: 2px solid ${({ theme }) => theme.colors.orange};
}

b,
strong {
  font-weight: bolder;
}

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


iframe,
img,
video,
input,
select,
textarea {
  height: auto;
  max-width: 100%;
}

figure {
  margin: 0;
}

button,
input,
select {
  margin: 0;
}

button {
  overflow: visible;
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

:-moz-focusring {
  outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
  box-shadow: none;
}
`;

export default GlobalStyle;
