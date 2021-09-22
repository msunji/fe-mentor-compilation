import GlobalStyle from "./styles/globalStyle";
import { Nav } from "./components/layout/Nav";
import { IntroText } from "./components/IntroText";
import { Solutions } from "./components/solution-components/Solutions";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <GlobalStyle />
      <main>
        <IntroText />
        <Solutions />
      </main>
    </>
  );
}

export default App;
