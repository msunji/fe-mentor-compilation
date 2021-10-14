import styled from "styled-components";

const StyledSkeleton = styled.div`
  overflow: hidden;
  background: var(--dark-desat-blue);
  color: rgb(247, 245, 248);
  width: 100%;

  @keyframes pulse {
    0% {
      background-color: var(--desat-periwinkle);
    }
    50% {
      background-color: #b28bdb;
    }
    100% {
      background-color: var(--desat-periwinkle);
    }
  }

  .skeleton-card__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 680px) and (max-width: 1199px) {
    width: calc(1 / 2 * 100% - 20px);
  }
  @media screen and (min-width: 1100px) {
    width: calc(1 / 3 * 100% - 20px);
  }

  .skeleton {
    &-thumb {
      height: 220px;
      width: 100%;
      animation: pulse linear 2s infinite;
    }
    &-title {
      padding: 0rem 1rem 0.5rem 1rem;
      flex-grow: 1;

      &__bg {
        height: 1.4rem;
        animation: pulse linear 2s infinite;
      }
    }
    &-view-links {
      margin: 0.5em 1rem 1rem 1rem;
      align-self: flex-end;
      list-style-type: none;
      height: 1em;

      li {
        display: inline-flex;
        margin-left: 10px;
        animation: pulse linear 2s infinite;
        height: 1.3em;
        width: 50px;
        padding-bottom: 1rem;
      }
    }
    &-tags {
      display: inline-block;
      overflow: hidden;
      padding: 1rem 1rem 0.5rem 1rem;

      li {
        display: inline-flex;
        margin-right: 10px;
        animation: pulse linear 2s infinite;
        height: 0.7em;
        width: 90px;
      }
    }
  }
`;

export const SkeletonCard = ({ type }) => {
  return (
    <StyledSkeleton>
      <div className="skeleton-card__inner">
        <div className="skeleton-thumb"></div>
        <ul className="skeleton-tags">
          <li></li>
          <li></li>
        </ul>
        <div className="skeleton-title">
          <div className="skeleton-title__bg" />
        </div>
        <ul className="skeleton-view-links">
          <li></li>
          <li></li>
        </ul>
      </div>
    </StyledSkeleton>
  );
};
