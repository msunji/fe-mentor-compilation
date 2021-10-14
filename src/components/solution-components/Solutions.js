import styled from "styled-components";
import { SkeletonCard } from "../layout/SkeletonCard";
import { useEffect, useState } from "react";
import { Solution } from "./Solution";

const SolutionsSection = styled.section`
  width: 80%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const SolutionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
