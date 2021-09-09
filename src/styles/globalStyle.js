import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --urbanist: 'Urbanist', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box
  }
  html,
  body {
    overflow-x: hidden;
    min-height: 100vh;
    font-family: var(--urbanist);
    font-size: 16px;
  }
`;

export default GlobalStyle;
