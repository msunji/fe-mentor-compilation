import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --header-text: 'Epilogue', sans-serif;
    --body-text: 'Roboto', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
    --dark-grey: #191A2C;
    --dark-desat-blue: #262446;
    --dark-brown: #302207;
    --yellow: #e5be4c;
    --white: #fff;
    --periwinkle: #d2a7ff;
    --desat-periwinkle: #72578f;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
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
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.9px;
    background: var(--white);
    font-family: var(--body-text);
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  h1, h2, h3, h4 {
    font-family: var(--header-text);
  }
  
  main {
    flex: 1;
  }
  
  p {
    font-size: 1.00em;
    line-height: 1.50em;
    padding-top: 0.389em;
    font-family: var(--body-text);
  }

  a, a:visited {
    text-decoration: none;
    color: var(--blue);
    font-weight: 500;
  }
`;

export default GlobalStyle;
