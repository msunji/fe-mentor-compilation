import styled from "styled-components";
import { Container } from "../layout/Container";
import { useEffect, useState } from "react";
import { Solution } from "./Solution";

const SolutionsGrid = styled.section``;

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
    <SolutionsGrid>
      <Container>
        <p>List solutions here</p>
        {solutions.map((solution) => (
          <Solution key={solution.id} data={solution} />
        ))}
      </Container>
    </SolutionsGrid>
  );
};
