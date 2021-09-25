import styled from "styled-components";
import { Container } from "./layout/Container";

const Text = styled.section`
  padding: calc(2.5 * var(--padding-y)) 0;
  background-color: var(--dark-grey);
  color: white;
`;

const TextContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  h1 {
    padding-top: 0;
  }

  .about-build {
    color: grey;
    margin-left: 4rem;

    .header {
      text-transform: uppercase;
    }
  }
`;

export const IntroText = () => {
  return (
    <Text>
      <TextContainer>
        <div>
          <h1>Frontend Mentor Solutions</h1>
          <p>
            Links are provided for each project's respective Github repo and
            Live site. This is a work in progress, so expect to see more changes
            as I progress through more challenges. Cheers!
          </p>
        </div>
        <div className="about-build">
          <p className="header">about these projects</p>
          <p>
            For the most part, I built these projects with React or Next.js and
            styled-components.
          </p>
        </div>
      </TextContainer>
    </Text>
  );
};
