import "sanitize.css";
import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`

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
