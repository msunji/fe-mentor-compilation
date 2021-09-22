import styled from "styled-components";
import { Container } from "./layout/Container";

const Text = styled.section`
  padding: calc(2.5 * var(--padding-y)) 0;
  background-color: var(--dark-grey);
  color: white;
`;

const TextContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  h1 {
    padding-top: 0;
  }
`;

const Filter = styled.div`
  margin-left: 3rem;

  .header {
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 0.5px;
    color: grey;
  }
`;

const CustomCheckBox = styled.div`
  // input[type="checkbox"] {
  //   display: none;
  // }
`;

const CheckBox = ({ boxName, inputId }) => {
  return (
    <CustomCheckBox>
      <input type="checkbox" id={inputId} name={inputId} />
      <label for={boxName}>{boxName}</label>
    </CustomCheckBox>
  );
};

export const IntroText = () => {
  return (
    <Text>
      <TextContainer>
        <div>
          <h1>Frontend Mentor Solutions</h1>
          <p>
            Links are provided for each project's respective Github repo and
            Live site. This is a work in progress, so expect to see more changes
            as I progress through more challenges. Cheers!
          </p>
        </div>
        <Filter>
          <p className="header">Show projects built with:</p>
          <div>
            <CheckBox boxName="React" inputId="react" />
            <CheckBox boxName="CSS Grid" inputId="cssgrid" />
          </div>
        </Filter>
      </TextContainer>
    </Text>
  );
};
