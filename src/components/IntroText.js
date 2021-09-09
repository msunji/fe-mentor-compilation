import styled from "styled-components";
import { Container } from "./layout/Container";

const Text = styled.section`
  width: 100%;
  height: 20em;
  background: var(--salmon);
`;

export const IntroText = () => {
  return (
    <Text>
      <Container>
        <p>
          Here's a list of all solutions I've done for certain{" "}
          <a href="https://www.frontendmentor.io/">Frontend Mentor</a>{" "}
          challenges. Links are provided for each project's Github Repo and Live
          Site. Tags are added to show you what I used to solve these
          challenges.
        </p>
      </Container>
    </Text>
  );
};
