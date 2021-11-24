import styled from "styled-components";

const Text = styled.section`
  padding: 4rem 0;

  h1 {
    font-weight: 700;
    font-size: clamp(1.46rem, 1.2059rem + 1.1294vw, 1.7rem);
    line-height: 1.11;
    margin-bottom: 0.5rem;
    color: var(--brick);
  }

  p {
    margin-bottom: 1rem;
  }

  .links-out {
    a {
      display: inline-flex;
      align-items: center;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }

      &:not(:last-of-type) {
        margin-right: 10px;
      }
      &::before {
        content: "";
        display: block;
        width: 20px;
        margin-right: 10px;
        background: var(--grey);
        height: 1px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: fixed;
    height: 100vh;
  }
`;

export const Header = () => {
  return (
    <Text>
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
    </Text>
  );
};
