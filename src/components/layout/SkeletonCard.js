import styled from "styled-components";

const StyledSkeleton = styled.div`
  background: #fff;
  min-width: 0;
  border-radius: 10px;
  box-shadow: -1px 7px 32px -10px rgba(255, 187, 187, 0.75);
  min-height: 300px;

  .skeleton {
    &-container {
      display: flex;
      flex-direction: column;
      align-content: space-between;
    }

    &-thumb {
      width: 100%;
      height: 150px;
      background: var(--salmon-light);
      margin-bottom: 10px;
      border-radius: 10px 10px 0 0;
    }
    &-info-container {
      padding: 1rem 1rem;
    }
    &-title {
      width: 100%;
      height: 20px;
      background: var(--salmon-light);
      margin-bottom: 15px;
    }
    &-view-links {
      display: flex;
      justify-content: space-evenly;

      li {
        width: 90px;
        height: 15px;
        display: inline-flex;
        background: var(--salmon-light);
      }
    }
    &-tags {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 30px;

      li {
        display: inline-flex;
        margin-right: 10px;
        background: var(--salmon-light);
        height: 18px;
        width: 70px;
        border-radius: 10px;
      }
    }
  }
`;

export const SkeletonCard = ({ type }) => {
  return (
    <StyledSkeleton>
      <div className="skeleton-container">
        <div className="skeleton-thumb"></div>
        <div className="skeleton-info-container">
          <div className="skeleton-title"></div>
          <ul className="skeleton-tags">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="skeleton-view-links">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </StyledSkeleton>
  );
};
