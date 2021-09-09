import styled from "styled-components";

const SolutionBlock = styled.div`
  width: 200px;
  background: white;
`;

export const Solution = ({ data }) => {
  console.log(data);
  return (
    <SolutionBlock>
      Test test
      <p>test</p>
    </SolutionBlock>
  );
};
