import styled from "styled-components";

const SolutionBlock = styled.div`
  width: 200px;
  background: white;
`;

export const Solution = ({ data }) => {
  console.log(data);
  return (
    <SolutionBlock data={data}>
      <img src={data.thumb[0].url} alt={data.challenge} />
      <p className="challenge-title">{data.challenge}</p>
      <div>
        <a href={data.live}>Live Site</a>
        <a href={data.repo}>View Code</a>
      </div>
    </SolutionBlock>
  );
};
