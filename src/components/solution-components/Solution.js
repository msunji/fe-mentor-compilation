import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SolutionBlock = styled.div`
  background: white;
  min-width: 0;
  border-radius: 10px;
  box-shadow: -1px 7px 32px -10px rgba(255, 187, 187, 0.75);

  .thumb-container {
    background: var(--salmon-dark);
    min-height: 250px;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    border-radius: 10px 10px 0 0;
  }

  .challenge-container {
    padding: 1rem 1rem;

    .challenge-title {
      font-weight: 600;
      color: var(--red);
      font-size: 1.2em;
      line-height: 1.3;
    }

    .challenge-built-with {
      margin-bottom: 1rem;
      .tag {
        display: inline-block;
        background: grey;
        border-radius: 10em;
        font-size: 0.8em;
        padding: 0 15px;
        margin-right: 5px;
        background: var(--light-grey-blue);
    }

    .challenge-links {
      border-top: 1px solid var(--salmon);
      padding-top: 1rem;

      li {
        display: flex;
        align-items: center;

        svg {
          color: var(--yellow);
          margin-right: 10px;
        }
      }
    }
  }
`;

export const Solution = ({ data }) => {
  console.log(data);
  return (
    <SolutionBlock bg={data.thumb[0].url}>
      <div className="thumb-container"></div>
      <div className="challenge-container">
        <p className="challenge-title">{data.challenge}</p>
        <div className="challenge-built-with">
          {data.built.map((builtwith) => (
            <span className="tag">{builtwith}</span>
          ))}
        </div>
        <ul className="challenge-links">
          <li>
            <FaGithub />
            <a href={data.live}>View Code</a>
          </li>
          <li>
            <FaExternalLinkAlt />
            <a href={data.live}>Live Site</a>
          </li>
        </ul>
      </div>
    </SolutionBlock>
  );
};
