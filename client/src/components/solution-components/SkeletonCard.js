import "../../styles/components/skeletoncard.scss";

const SkeletonCard = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__inner">
        <div className="skeleton__thumb"></div>
        <ul className="skeleton__tags">
          <li></li>
          <li></li>
        </ul>
        <div className="skeleton__title">
          <div className="skeleton__title-bg" />
        </div>
        <ul className="skeleton__view-links">
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SkeletonCard;
