import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SolutionBlock = styled.div`
  background: white;
  min-width: 0;
  border-radius: 10px;
  box-shadow: -1px 7px 32px -10px rgba(255, 187, 187, 0.75);
  display: grid;
  grid-template-rows: 1fr 1fr;

  .thumb-container {
    background: var(--salmon-dark);
    min-height: 250px;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    border-radius: 10px 10px 0 0;
  }

  .challenge-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .challenge-padding {
      padding: 1rem 1rem;
    }

    .challenge-title {
      font-weight: 600;
      color: var(--red);
      font-size: 1.2em;
      line-height: 1.3;
    }

    .challenge-built-with {
      .tag {
        display: inline-block;
        background: grey;
        border-radius: 10em;
        font-size: 0.8em;
        padding: 0 15px;
        margin-right: 5px;
        background: var(--light-grey-blue);
      }
    }
  }
  .view-links {
    border-top: 1px solid pink;

    > div {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const Solution = ({ data }) => {
  return (
    <SolutionBlock bg={data.thumb[0].url}>
      <div className="thumb-container"></div>
      <div className="challenge-container">
        <div className="challenge-padding">
          <p className="challenge-title">{data.challenge}</p>
          <div className="challenge-built-with">
            {data.built.map((builtwith) => (
              <span key={builtwith} className="tag">
                {builtwith}
              </span>
            ))}
          </div>
        </div>

        <ul className="view-links">
          <div className="challenge-padding">
            <li>
              <a href={data.live}>View Code</a>
            </li>
            <li>
              <a href={data.live}>Live Site</a>
            </li>
          </div>
        </ul>
      </div>
    </SolutionBlock>
  );
};
