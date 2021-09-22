import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --urbanist: 'Urbanist', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
    --brown: rgb(100 76 59);
    --blue: rgb(0,99,161);
    --yellow: #fcde67;
    --white: #fff;
    --beige: rgb(255, 248, 229);
    --red: rgb(224, 93, 93);
    --light-grey-blue: rgb(232, 246, 239);
    --salmon: #ef9273;
    --salmon-light: rgba(255, 187, 187, 0.75);
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
    color: var(--brown);
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
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

  main {
    flex: 1;
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

  a, a:visited {
    text-decoration: none;
    color: var(--blue);
    font-weight: 600;
  }
`;

export default GlobalStyle;
