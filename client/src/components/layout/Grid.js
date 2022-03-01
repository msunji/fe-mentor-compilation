import "../../styles/components/grid.scss";

const Grid = ({ children }) => {
  return (
    <main className="grid">
      <div className="grid-container">{children}</div>
    </main>
  );
};

export default Grid;
