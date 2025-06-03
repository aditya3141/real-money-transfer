const FeatureWidgetFive = ({ title, description, iconSrc }) => {
  return (
    <>
      <div
        className="col-lg-6"
        data-aos="fade-up"
        data-aos-delay="{{100 * loop.index}}"
      >
        <div className="feature-widget-5">
          <div className="feature-widget-5__icon">
            <img src={iconSrc} alt="feature icon" />
          </div>
          <div className="feature-widget-5__body">
            <h4 className="feature-widget-5__title">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureWidgetFive;
