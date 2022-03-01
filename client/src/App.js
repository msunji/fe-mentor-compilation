import "./styles/global.scss";
import Sidebar from "./components/layout/Sidebar";
import Solutions from "./components/solution-components/Solutions";
import Grid from "./components/layout/Grid";

function App() {
  return (
    <>
      <Grid>
        <Sidebar />
        <Solutions />
      </Grid>
    </>
  );
}

export default App;
