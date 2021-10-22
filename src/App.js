import GlobalStyle from "./styles/globalStyle";
import { Header } from "./components/Header";
import { Solutions } from "./components/solution-components/Solutions";
import { Footer } from "./components/layout/Footer";
import styled from "styled-components";

const SiteGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr min(95%, 1500px) 1fr;

  > * {
    grid-column: 2;
  }
`;

const SiteContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SiteGrid>
        <SiteContent>
          <Header />
          <Solutions />
        </SiteContent>
      </SiteGrid>
      {/* <Footer /> */}
    </>
  );
}

export default App;
