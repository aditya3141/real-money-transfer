const FeatureCard = ({ iconSrc, title, description }) => {
  return (
    <>
      <div className="feature-card">
        <div className="feature-card__icon">
          <img src={iconSrc} alt="image alt" />
        </div>
        <div className="feature-card__body">
          <h3 className="feature-card__title">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
