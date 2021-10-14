import styled from "styled-components";
import { Container } from "./Container";

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

  li {
    margin-right: 10px;

    &:not(:last-of-type)::after {
      content: "/";
      margin-left: 10px;
      color: var(--periwinkle);
    }
  }
  a,
  a:visited {
    color: var(--yellow);
    transition: all 0.4s ease;
  }

  a:hover,
  a:focus {
    color: var(--periwinkle);
    border-bottom: 1px solid var(--periwinkle);
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>Find me elsewhere</p>
        <FooterLinks>
          <li>
            <a href="https://github.com/msunji">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mconsunji/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mconsunji/">Portfolio</a>
          </li>
        </FooterLinks>
      </Container>
    </StyledFooter>
  );
};
