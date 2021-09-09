import styled from "styled-components";

const SolutionBlock = styled.div`
  background: white;
  min-width: 0;

  .thumb-container {
    background: var(--salmon-dark);
    min-height: 250px;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
  }
`;

export const Solution = ({ data }) => {
  console.log(data);
  return (
    <SolutionBlock data={data} bg={data.thumb[0].url}>
      <div className="thumb-container"></div>
      <p className="challenge-title">{data.challenge}</p>
      <div>
        <a href={data.live}>Live Site</a>
        <a href={data.repo}>View Code</a>
      </div>
    </SolutionBlock>
  );
};
