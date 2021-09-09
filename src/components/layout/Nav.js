import styled from "styled-components";
import { Container } from "./Container";

const NavStyling = styled.nav`
  border-bottom: 1px solid var(--black);
  background: var(--yellow);
`;

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-y) 0;

  .site-title {
    line-height: 1.1;
    font-weight: 600;
    font-size: 1.5em;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    border-right: 1px solid var(--black);
    color: var(--red);
  }
  .nav-links {
    display: flex;
    align-items: center;

    li {
      padding-left: 2rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      height: 100%;

      &:first-of-type {
        border-right: 1px solid var(--salmon-dark);
      }
    }
  }
`;

export const Nav = () => {
  return (
    <NavStyling>
      <NavContainer>
        <p className="site-title">
          Frontend Mentor <br /> Solutions
        </p>

        <ul className="nav-links">
          <li>Portfolio</li>
          <li>light/dark</li>
        </ul>
      </NavContainer>
    </NavStyling>
  );
};
