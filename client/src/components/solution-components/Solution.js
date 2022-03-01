import "../../styles/components/solutions.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// const SolutionThumb = styled.img`
//   width: 100%;
//   object-fit: cover;
//   border-radius: 10px 0 0 0 10px;
// `;

const Solution = ({ data }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="thumb">
          <img
            src={data.thumbDesktop[0].url}
            alt={data.challenge}
            width="500"
            height="313"
          />
        </div>

        <ul className="tags">
          {data.built.map((builtwith, i) => (
            <li key={builtwith} className="tag">
              {builtwith}
              {i !== data.built.length - 1 ? ", " : ""}
            </li>
          ))}
        </ul>
        <div>
          <h2 className="challenge-name">{data.challenge}</h2>
        </div>

        <ul className="links">
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
        </ul>
      </div>
    </div>
  );
};

export default Solution;
