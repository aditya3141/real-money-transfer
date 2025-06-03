const ContentSectionOne = () => {
  return (
    <div className="home-6_content-section-1 section-padding-120" id="about">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-6_content-image-1-block ">
              <div className="home-6_content-image-1 content-image--mobile-width">
                <img
                  src={"/image/home-6/content-image-1.png"}
                  alt="alternative text"
                />
              </div>
              <div className="home-6_content-image-1-card">
                <img
                  src={"/image/home-6/content-image-1-card.png"}
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md heading-md--general-sans text-l5-secondary">
                  Masco cold email outreach that drives meetings with your dream
                  clients
                </h2>
                <p>
                  Turn Masco's cold email outreach into a lead-converting sales
                  machine. Our simple-to-use features combined with our
                  done-for-you services will enable you to generate and close
                  deals faster.
                </p>
              </div>
              <div className="content-divider" />
              <div className="content__stats-block">
                <div className="stat-single">
                  <span className="stat-single__count "> 80%</span>
                  <span className="stat-single__text">
                    Increase in Monthly Meetings
                  </span>
                </div>
                <div className="stat-single">
                  <span className="stat-single__count"> $50M</span>
                  <span className="stat-single__text">
                    {" "}
                    Recurring Revenue Generated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
