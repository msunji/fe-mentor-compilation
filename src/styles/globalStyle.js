import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --body: 'Epilogue', sans-serif;
    --tags: 'Inter', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
    --dark-grey: #030302;
    --brown: rgb(100 76 59);
    --blue: rgb(0,99,161);
    --yellow: #fcde67;
    --white: #fff;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,
  body {
    overflow-x: hidden;
    min-height: 100vh;
    font-weight: 400;
    font-family: var(--body);
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.9px;
    color: var(--dark-grey);
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
  }
  
  h2 {
    font-size: 1.56em;
    line-height: 1.93em;
    padding-top: 0.607em;
  }
  
  h3 {
    font-size: 1.28em;
    line-height: 1.17em;
    padding-top: 0.261em;
  }
  
  h4 {
    font-size: 1.00em;
    line-height: 1.50em;
    padding-top: 0.389em;
  }

  main {
    flex: 1;
  }
  
  p {
    font-size: 1.00em;
    line-height: 1.50em;
    padding-top: 0.389em;
  }

  a, a:visited {
    text-decoration: none;
    color: var(--blue);
    font-weight: 600;
  }
`;

export default GlobalStyle;
