import styled from "styled-components";
import { Container } from "./Container";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

const StyledFooter = styled.footer`
  color: var(--white);
  padding: calc(2 * var(--padding-y)) 0;
  font-size: 0.9em;
  margin-top: 3rem;

  p {
    text-transform: uppercase;
    font-family: var(--tags);
    color: var(--periwinkle);
    letter-spacing: 1.9px;
    margin-bottom: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;

    &:before {
      content: "";
      display: inline-block;
      width: 100px;
      height: 1px;
      background: var(--periwinkle);
      margin-right: 1rem;
    }
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1;

  li:first-of-type {
    margin-right: 20px;
  }

  svg {
    font-size: 1.5em;
    color: var(--periwinkle);
    transition: all 0.4s ease-in;
  }

  svg:hover,
  svg:focus {
    color: var(--yellow);
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>Find me elsewhere</p>
        <FooterLinks>
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
        </FooterLinks>
      </Container>
    </StyledFooter>
  );
};
