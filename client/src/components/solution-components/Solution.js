import styled from "styled-components";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const SolutionCard = styled.div`
  overflow: hidden;
  background: var(--off-white);
  width: 100%;
  border-radius: 10px;

  .solution-card__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const SolutionThumb = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 0 10px;
`;

const SolutionTags = styled.ul`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
  overflow: hidden;
  font-family: var(--body-text);
  letter-spacing: 1.2px;
  padding: 1rem 1rem 0.5rem 1rem;
  color: var(--desat-brown);

  li:not(:last-of-type) {
    margin-right: 2px;
  }
`;

const SolutionTitle = styled.div`
  padding: 0rem 1rem 0.5rem 1rem;
  flex-grow: 1;
  margin-bottom: 0.3rem;

  h2 {
    padding-top: 0;
    letter-spacing: -0.5px;
    font-size: 1.25em;
    line-height: 1.25;
    font-weight: 600;
  }
`;

const SolutionLinks = styled.ul`
  padding: 0.5em 1rem 1rem 1rem;
  font-size: 0.83em;
  font-weight: 500;
  text-transform: uppercase;
  align-self: flex-end;
  list-style-type: none;

  li {
    display: inline-flex;
    align-items: center;
    margin-left: 10px;

    a {
      display: flex;
    }

    svg {
      margin-right: 6px;
      font-size: 1.3em;
    }
  }
`;

export const Solution = ({ data }) => {
  return (
    <SolutionCard>
      <div className="solution-card__inner">
        <SolutionThumb src={data.thumbDesktop[0].url} alt={data.challenge} />

        <SolutionTags>
          {data.built.map((builtwith, i) => (
            <li key={builtwith} className="tag">
              {builtwith}
              {i !== data.built.length - 1 ? ", " : ""}
            </li>
          ))}
        </SolutionTags>
        <SolutionTitle>
          <h2 className="challenge-name">{data.challenge}</h2>
        </SolutionTitle>

        <SolutionLinks>
          <li>
            <a href={data.repo}>
              <span>
                <FiGithub />
              </span>
              Code
            </a>
          </li>
          <li>
            <a href={data.live}>
              <span>
                <FiExternalLink />
              </span>
              Site
            </a>
          </li>
        </SolutionLinks>
      </div>
    </SolutionCard>
  );
};