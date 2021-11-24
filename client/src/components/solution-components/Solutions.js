import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SkeletonCard } from "../layout/SkeletonCard";
import { Solution } from "./Solution";

const SolutionsSection = styled.section`
  padding: 2rem 0;

  @media screen and (min-width: 1000px) {
    max-width: 600px;
    position: absolute;
    right: 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 750px;
    position: absolute;
    right: 0;
  }
`;

const SolutionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Solutions = () => {
  const [solutions, setSolutions] = useState([]);

  const loadSolutions = async () => {
    try {
      const response = await axios.get("/api/solutions");
      setSolutions(response.data.solutions);
    } catch (err) {
      console.error(err);
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
          : [1, 2, 3, 4].map((_, i) => <SkeletonCard key={i} />)}
      </SolutionsContainer>
    </SolutionsSection>
  );
};
