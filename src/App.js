import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";
import { Nav } from "./components/layout/Nav";
import { IntroText } from "./components/IntroText";
import { Solutions } from "./components/solution-components/Solutions";

function App() {
  return (
    <>
      <Nav />
      <GlobalStyle />
      <main>
        <IntroText />
        <Solutions />
      </main>
    </>
  );
}

export default App;
