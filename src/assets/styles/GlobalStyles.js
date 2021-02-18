import "sanitize.css";
import { createGlobalStyle } from "styled-components";
import 'fontsource-poppins/300.css';
import colors from "./colors";


const GlobalStyle = createGlobalStyle`

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: ${colors.black};
}

a {
    text-decoration: none;
    color: inherit;
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
`;

export default GlobalStyle;
