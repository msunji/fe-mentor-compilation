import styled from "styled-components";
import { Container } from "./layout/Container";

const Text = styled.section`
  padding: calc(2.5 * var(--padding-y)) 0;
  color: white;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 10px;
    background-image: linear-gradient(
      64.5deg,
      rgba(245, 116, 185, 1) 14.7%,
      rgba(89, 97, 223, 1) 88.7%
    );
  }
`;

const TextContainer = styled(Container)`
  h1 {
    font-weight: 700;
    font-size: clamp(1.46rem, 1.2059rem + 1.1294vw, 1.7rem);
    color: var(--periwinkle);
    line-height: 1.3;
  }
`;

export const Header = () => {
  return (
    <Text>
      <TextContainer>
        <h1>Frontend Mentor Solutions</h1>
        <p>
          Links are provided for each project's respective Github repo and live
          site. This is a work in progress, so expect to see more changes as I
          progress through more challenges. Cheers!
        </p>
      </TextContainer>
    </Text>
  );
};
