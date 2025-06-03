const FactSection = () => {
  return (
    <>
      <div className="about_fact-section  section-padding-120">
        <div className="container">
          <div className="row row--custom ">
            <div className="col-xxl-auto  col-lg-7 col-md-10 col-auto">
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-md text-black">
                    Our creative talent has been influencing branding around the
                    world for a long time
                  </h2>
                  <p>
                    With more than a decade of experience. We are worry about
                    the details so you need don't have to. When you work with
                    our agency, you can be sure that your website meets every
                    standard.
                  </p>
                </div>
                <div className="content-button-block">
                  <a
                    href="#"
                    className="btn-masco btn-primary rounded-pill btn-fill--up"
                  >
                    <span>Get in touch</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 col-auto">
              <div className="about_stats-wrapper">
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">36K+</h2>
                    <span>Satisfied clients</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">80%</h2>
                    <span>Active Engagement</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">54K+</h2>
                    <span>Success projects</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">72+</h2>
                    <span>Awards winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactSection;
