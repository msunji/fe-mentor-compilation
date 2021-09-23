import styled from "styled-components";
import { Container } from "./Container";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

const StyledFooter = styled.footer`
  background: var(--dark-grey);
  color: var(--white);
  padding: calc(2 * var(--padding-y)) 0;
  font-size: 0.9em;

  h3 {
    text-transform: uppercase;
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
    font-size: 2.2em;
    color: var(--white);
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
        <h3>Find me elsewhere</h3>
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
