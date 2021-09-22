import styled from "styled-components";

const StyledSkeleton = styled.div`
  background: #fff;
  min-width: 0;
  min-height: 300px;
  overflow: hidden;
  padding: 4rem;
  background: white;

  border-bottom: 1px solid var(--dark-grey);
  border-right: none;

  @media screen and (min-width: 740px) and (max-width: 1099px) {
    &:not(:nth-child(2n)) {
      border-right: 1px solid var(--dark-grey);
    }
  }

  @media screen and (min-width: 1100px) {
    &:not(:nth-child(3n)) {
      border-right: 1px solid var(--dark-grey);
    }
  }

  .skeleton {
    &-container {
      display: flex;
      flex-direction: column;
      align-content: space-between;
    }

    &-thumb {
      width: 100%;
      height: 200px;
      background: grey;
      margin-bottom: 2rem;
    }
    &-title {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-text {
        width: 46%;
        height: 30px;
        background: grey;
      }

      &-num {
        width: 19%;
        height: 50px;
        background: grey;
      }
    }
    &-view-links {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-text {
        height: 40px;
        width: 40%;
        background: grey;
      }

      &-icons {
        display: flex;
        li {
          width: 30px;
          height: 30px;
          display: inline-flex;
          background: grey;
          margin-left: 10px;
        }
      }
    }
    &-tags {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 30px;

      li {
        display: inline-flex;
        margin-right: 10px;
        margin-bottom: 10px;
        background: grey;
        height: 24px;
        width: 90px;
        border-radius: 9px;
      }
    }
  }
`;

export const SkeletonCard = ({ type }) => {
  return (
    <StyledSkeleton>
      <div className="skeleton-container">
        <div className="skeleton-title">
          <div className="skeleton-title-text"></div>
          <div className="skeleton-title-num"></div>
        </div>
        <div className="skeleton-thumb"></div>
        <div className="skeleton-info-container">
          <ul className="skeleton-tags">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="skeleton-view-links">
            <div className="skeleton-view-links-text"></div>
            <ul className="skeleton-view-links-icons">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </StyledSkeleton>
  );
};
