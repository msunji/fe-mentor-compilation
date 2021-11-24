import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --header-text: 'Epilogue', sans-serif;
    --body-text: 'Roboto', sans-serif;
    --padding-y: 2rem;
    --padding-x: 2rem;
    --off-white: #fffffe;
    --beige: #faeee7;
    --grey: #594a4e;
    --desat-brown: #b58f7a;
    --red: #ef2020;
    --brick: #d1570f;
    --dark-brick: #582a18;
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
    background: var(--beige);
    font-family: var(--body-text);
    color: var(--grey);
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  h1, h2, h3, h4 {
    font-family: var(--header-text);
    color: var(--dark-brick);
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
  a {
    text-decoration: none;
    color: var(--brick);
    transition: color 0.4s ease;

    &:visited {
      text-decoration: none;
      color: var(--brick);
    }

    &:hover,
    &:active
     {
      color: var(--dark-brick);
    }
  }
`;

export default GlobalStyle;