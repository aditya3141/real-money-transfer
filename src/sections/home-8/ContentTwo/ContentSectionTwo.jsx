const ContentSectionTwo = () => {
  return (
    <div className="home-8_content-section-2 padding-bottom-120 bg-cream">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="col-xxl-5 col-lg-5 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-8_content-image-2-block ">
              <div className="home-8_content-image-2 content-image--mobile-width">
                <img
                  src="/image/home-8/content-image-2.png"
                  alt="alternative text"
                />
              </div>
              <div className="home-8_content-image-2-card">
                <img
                  src="/image/home-8/content-image-2-card.png"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title text-black-2 heading-lg">
                  Our mission is to build your business
                </h2>
                <p>
                  Our team of writers, developers, and influencers is ready to
                  help to learn about starting business with some inspiration.{" "}
                </p>
              </div>
              <div className="content-list-block">
                <ul className="content-list row">
                  <li className="content-list-item col-6">
                    <img
                      src="/image/icons/icon-check-purple.svg"
                      alt="icon check purple"
                    />
                    Coordinate with team
                  </li>
                  <li className="content-list-item col-6">
                    <img
                      src="/image/icons/icon-check-purple.svg"
                      alt="icon check purple"
                    />
                    Share insights
                  </li>
                  <li className="content-list-item col-6">
                    <img
                      src="/image/icons/icon-check-purple.svg"
                      alt="icon check purple"
                    />
                    Monitor timelines
                  </li>
                  <li className="content-list-item col-6">
                    <img
                      src="/image/icons/icon-check-purple.svg"
                      alt="icon check purple"
                    />
                    Hit all your targets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
