import styled from "styled-components";

const Text = styled.section`
  padding: 4rem 0;

  h1 {
    font-weight: 700;
    font-size: clamp(1.46rem, 1.2059rem + 1.1294vw, 1.7rem);
    line-height: 1.3;
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
        Links are provided for each project's respective Github repo and live
        site. This is a work in progress, so expect to see more changes as I
        progress through more challenges.
      </p>
      <p>Portoflio / Github / Repo for this site</p>
    </Text>
  );
};
