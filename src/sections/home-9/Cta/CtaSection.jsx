const CtaSection = () => {
  return (
    <div className="cta-home-9 padding-top-100">
      <div className="container">
        <div className="cta-home-9-wrapper">
          <div className="cta-home-9-shape-wrapper">
            <div className="cta-home-9-shape">
              <img src="/image/cta/cta-9-shape.png" alt="image alt" />
            </div>
          </div>
          <div className="row row--custom">
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-7 col-10">
              <div className="cta-text-block">
                <h2 className="cta-home-9-title heading-lg heading-lg--syne">
                  Ready to start tracking your time today?
                </h2>
                <p>
                  If you download Masco time-tracker for employee monitoring and
                  project management software today, you'll get up to 14% off.
                </p>
              </div>
            </div>
            <div className="col-xl-auto col-lg-4 col-md-5 col-xs-8 col-10">
              <div className="cta-home-9-button">
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
    </div>
  );
};

export default CtaSection;
