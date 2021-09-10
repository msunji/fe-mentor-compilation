import styled from "styled-components";
import { Container } from "./layout/Container";

const Text = styled.section`
  text-align: center;
  background: var(--yellow);
`;

export const IntroText = () => {
  return (
    <Text>
      <Container>
        <h1>About</h1>
        <p>
          Here you'll find a compilation of all the solutions I've completed for
          certain <a href="https://www.frontendmentor.io/">Frontend Mentor</a>{" "}
          challenges. Links are provided for each project's respective Github
          repo and Live site. Tags are added to show what I I've used to solve
          these challenges. This is a work in progress, so expect to see more
          changes as I progress through more challenges. Cheers!
        </p>
      </Container>
    </Text>
  );
};
