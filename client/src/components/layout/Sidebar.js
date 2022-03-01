import "../../styles/components/sidebar.scss";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h1>Frontend Mentor Solutions</h1>
      <p>
        Links are provided for each project's Github repo and live site. This is
        a work in progress, so expect to see more changes as I progress through
        more challenges.
      </p>
      <div className="links-out">
        <a href="http://mconsunji.com">Portfolio</a>
        <a href="https://github.com/msunji">Github</a>
      </div>
    </section>
  );
};

export default Sidebar;
