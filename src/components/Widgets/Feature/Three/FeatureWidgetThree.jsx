const FeatureWidgetThree = ({ imageSrc, title, description }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="feature-widget-3">
          <div className="feature-widget-3__icon">
            <img src={imageSrc} alt="image alt" />
          </div>
          <div className="feature-widget-3__body">
            <h3 className="feature-widget-3__title">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureWidgetThree;
