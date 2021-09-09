import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --urbanist: 'Urbanist', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
    --blue: #1c39c2;
    --yellow: #fcde67;
    --white: #fff;
    --salmon: #fae5df;
    --salmon-dark: #e98f8f;
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
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.9px;
    color: var(--salmon-dark);
    background: linear-gradient(180deg, var(--salmon) 28%, var(--white) 28%);
  }
  h1 {
    font-size: 1.94em;
    line-height: 1.54em;
    padding-top: 0.429em;
    margin-bottom: 0.343em;
    font-weight: 600;
  }
  
  h2 {
    font-size: 1.56em;
    line-height: 1.93em;
    padding-top: 0.607em;
    margin-bottom: 0.357em;
    font-weight: 600;
  }
  
  h3 {
    font-size: 1.28em;
    line-height: 1.17em;
    padding-top: 0.261em;
    margin-bottom: 0.913em;
    font-weight: 600;
  }
  
  h4 {
    font-size: 1.00em;
    line-height: 1.50em;
    padding-top: 0.389em;
    margin-bottom: 1.11em;
  }
  
  p {
    font-size: 1.00em;
    line-height: 1.50em;
    padding-top: 0.389em;
    margin-bottom: 1.11em;
  }
  
  section {
    padding: var(--padding-y) 0;
  }
`;

export default GlobalStyle;
