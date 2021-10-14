import GlobalStyle from "./styles/globalStyle";
import { Header } from "./components/Header";
import { Solutions } from "./components/solution-components/Solutions";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <GlobalStyle />
      <main>
        <Header />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}

export default App;
