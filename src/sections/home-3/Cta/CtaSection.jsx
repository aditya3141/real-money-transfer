const CtaSection = () => {
  return (
    <div className="cta-home-3">
      <div className="container">
        <div className="cta-home-3__inner">
          <div className="cta-home-3__image-block">
            <div className="cta-home-3__image">
              <img src="/image/cta/cta-3.png" alt="image alt" />
              <div className="cta-home-3__image-shape">
                <img src="/image/cta/cta-3-shape.png" alt="image alt" />
              </div>
            </div>
          </div>
          <div className="cta-home-3__content-block">
            <div className="cta-text-block">
              <h2 className="cta-title heading-md text-black">
                Download now and start keeping yourself healthy
              </h2>
              <p>
                The fitness builder app lets you create your own workouts based
                on your goals. Download on any device and keep yourself healthy.
              </p>
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
