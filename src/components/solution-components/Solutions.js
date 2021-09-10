import styled from "styled-components";
import { SkeletonCard } from "../layout/SkeletonCard";
import { Container } from "../layout/Container";
import { useEffect, useState } from "react";
import { Solution } from "./Solution";

const SolutionsSection = styled.section``;

const SolutionsContainer = styled(Container)`
  height: auto;
  padding: var(--padding-y) var(--padding-x);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  grid-template-rows: repeat(auto-fill, 1fr);
  padding: 0;

  @media screen and (min-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
        {solutions.length
          ? solutions.map((solution) => (
              <Solution key={solution.id} data={solution} />
            ))
          : [1, 2, 3].map((_, i) => <SkeletonCard key={i} />)}
      </SolutionsContainer>
    </SolutionsSection>
  );
};
