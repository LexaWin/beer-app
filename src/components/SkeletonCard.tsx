import './SkeletonCard.css';

const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__title" />
      <div className="skeleton__image" />
      <div className="skeleton__text" />
    </div>
  );
};

export default SkeletonCard;
