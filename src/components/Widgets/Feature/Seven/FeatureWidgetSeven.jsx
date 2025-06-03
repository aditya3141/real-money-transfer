const FeatureWidgetSeven = ({ iconSrc, title, description }) => {
  return (
    <>
      <div className="feature-widget-7">
        <div className="feature-widget-7__icon-wrapper">
          <img src={iconSrc} alt="feature icon" />
        </div>
        <div className="feature-widget-7__body">
          <h4 className="feature-widget-7__title">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureWidgetSeven;
