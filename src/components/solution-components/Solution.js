import styled from "styled-components";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const SolutionBlock = styled.div`
  overflow: hidden;
  padding: 4rem;
  background: white;
  min-width: 0;
  display: grid;
  grid-template-rows: min-content 1fr auto auto;

  border-bottom: 1px solid var(--dark-grey);
  border-right: none;

  @media screen and (min-width: 740px) {
    &:not(:nth-child(2n)) {
      border-right: 1px solid var(--dark-grey);
    }
  }

  @media screen and (min-width: 1100px) {
    &:not(:nth-child(3n)) {
      border-right: 1px solid var(--dark-grey);
    }
  }
`;

const Thumb = styled.div`
  background: var(--dark-grey);
  min-height: 250px;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  margin-bottom: 1.5rem;
`;

const Tags = styled.ul`
  margin-bottom: 1rem;
  li {
    display: inline-block;
    background: var(--dark-grey);
    border: 2px solid var(--dark-grey);
    border-radius: 9px;
    font-size: 0.8em;
    padding: 3px 15px;
    margin-right: 5px;
    margin-bottom: 5px;
    color: white;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    margin-bottom: 0;
    padding-top: 0;
    font-size: 2em;
  }

  .line {
    width: 70%;
    max-width: 150px;
    background: black;
    height: 1px;
  }

  li {
    font-size: 2em;
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
    a,
    a:visited {
      color: var(--dark-grey);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  .num {
    padding: 0;
    margin: 0;
    font-size: 4.5em;
    font-weight: 700;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  line-height: 1.1;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0.8rem;
  margin: 0;
  text-transform: uppercase;
`;

export const Solution = ({ data }) => {
  return (
    <SolutionBlock>
      <Header>
        <Title>{data.challenge}</Title>
        <p className="num">{data.numKey}</p>
      </Header>

      <Thumb bg={data.thumb[0].url} />
      <Tags>
        {data.built.map((builtwith) => (
          <li key={builtwith} className="tag">
            {builtwith}
          </li>
        ))}
      </Tags>

      <Links>
        <p>View</p>
        <div className="line"></div>
        <ul>
          <li>
            <a href={data.repo}>
              <FiGithub alt="View Repo" />
            </a>
          </li>
          <li>
            <a href={data.live}>
              <FiExternalLink alt="View Live Site" />
            </a>
          </li>
        </ul>
      </Links>
    </SolutionBlock>
  );
};
