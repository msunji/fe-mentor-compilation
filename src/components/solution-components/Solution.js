import styled from "styled-components";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const SolutionCard = styled.div`
  overflow: hidden;
  background: var(--dark-desat-blue);
  color: rgb(247, 245, 248);
  width: 100%;

  .solution-card__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 640px) and (max-width: 1199px) {
    width: calc(1 / 2 * 100% - 20px);
  }
  @media screen and (min-width: 1100px) {
    width: calc(1 / 3 * 100% - 20px);
  }
`;

const SolutionThumb = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SolutionTags = styled.ul`
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
  overflow: hidden;
  font-family: var(--tags);
  letter-spacing: 1.2px;
  padding: 1rem 1rem 0.5rem 1rem;
  color: var(--periwinkle);

  li:not(:last-of-type) {
    margin-right: 2px;
  }
`;

const SolutionTitle = styled.div`
  padding: 0rem 1rem 0.5rem 1rem;
  flex-grow: 1;
  margin-bottom: 0.3rem;

  h2 {
    font-weight: 700;
    padding-top: 0;
    letter-spacing: 0.9px;
    font-size: 1.3em;
    line-height: 1.25;
  }
`;

const SolutionLinks = styled.ul`
  padding: 0.5em 1rem 1rem 1rem;
  font-family: var(--inter);
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
      transition: fill 0.4s easeInOut;
    }
    a,
    a:visited {
      transition: all 0.3s ease-out 0.3s;
      color: var(--yellow);
    }

    a:hover,
    a:focus {
      color: var(--periwinkle);
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
