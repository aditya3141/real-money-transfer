const CtaSection = () => {
  return (
    <div className="cta-home-6 padding-bottom-100">
      <div className="container">
        <div className="cta-home-6-wrapper">
          <div className="cta-home-6-shape-wrapper">
            <div className="cta-home-6-shape">
              <img src="image/cta/cta-6-shape.png" alt="image alt" />
            </div>
          </div>
          <div className="cta-content-block">
            <div className="cta-text-block">
              <h2 className="cta-home-6-title heading-md heading-md--general-sans text-white">
                Download now and build brand awareness through cold email
              </h2>
            </div>
            <div className="cta-button-group">
              <a href="#">
                <img src="/image/common/app-store.png" alt="image alt" />
              </a>
              <a href="#">
                <img src="/image/common/play-store.png" alt="image alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
