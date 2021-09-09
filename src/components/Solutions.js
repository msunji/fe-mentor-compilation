import styled from "styled-components";
import { Container } from "./layout/Container";
import { useEffect, useState } from "react";

const SolutionsGrid = styled.section``;

export const Solutions = () => {
  const [solutions, setSolutions] = useState([]);

  const loadSolutions = async () => {
    try {
      const res = await fetch("/api/solutions");
      const solns = await res.json();
      console.log(solns);
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
      </Container>
    </SolutionsGrid>
  );
};
