import styled from "styled-components";
import { Container } from "../layout/Container";
import { useEffect, useState } from "react";
import { Solution } from "./Solution";

const SolutionsSection = styled.section``;

const SolutionsContainer = styled(Container)`
  background: white;
  width: 100%;
  height: auto;
  border: 1px solid red;
  padding: var(--padding-y) var(--padding-x);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-template-rows: repeat(auto-fill, 1fr);
`;

export const Solutions = () => {
  const [solutions, setSolutions] = useState([]);

  const loadSolutions = async () => {
    try {
      const res = await fetch("/api/solutions");
      const solns = await res.json();
      setSolutions(solns);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSolutions();
  }, []);

  return (
    <SolutionsSection>
      <SolutionsContainer>
        {solutions.map((solution) => (
          <Solution key={solution.id} data={solution} />
        ))}
      </SolutionsContainer>
    </SolutionsSection>
  );
};
