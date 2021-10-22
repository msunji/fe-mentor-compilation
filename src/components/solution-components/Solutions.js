import styled from "styled-components";
import { SkeletonCard } from "../layout/SkeletonCard";
import { useEffect, useState } from "react";
import { Solution } from "./Solution";

const SolutionsSection = styled.section`
  max-width: 600px;
  padding: 2rem 0;

  @media screen and (min-width: 1000px) {
    position: absolute;
    right: 0;
  }
`;

const SolutionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // @media screen and (min-width: 1100px) {
  //   grid-template-columns: repeat(3, 1fr);
  // }
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
