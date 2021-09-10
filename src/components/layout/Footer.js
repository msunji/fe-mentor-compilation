import styled from "styled-components";
import { Container } from "./Container";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

const StyledFooter = styled.footer`
  padding: calc(2 * var(--padding-y)) 0;
  font-size: 0.9em;

  > div {
    text-align: center;
  }

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    line-height: 1;

    li:first-of-type {
      margin-right: 20px;
    }

    svg {
      transition: all 0.4s ease-in;
    }

    svg:hover,
    svg:focus {
      color: var(--red);
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>Find me elsewhere</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/msunji">
              <FaGithubAlt />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mconsunji/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
};
