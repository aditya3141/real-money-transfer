const ContentSectionOne = () => {
  return (
    <div className="home-1_content-section-1 section-padding-120" id="about">
      <div className="container">
        <div className="row row--custom">
          <div
            className="offset-xl-1 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-1_content-image-1 content-image--mobile-width">
              <img
                src="/image/home-1/content-image-1.png"
                alt="Content Image Main"
              />
              <div className="home-1_content-image-1-shape">
                <img
                  src="/image/home-1/content-image-1-shape.svg"
                  alt="Content Image Shape"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-black">
                  Boost the effectiveness of your promotions as well as polish
                  your branding
                </h2>
                <p>
                  SINCE 1998, we transform bold business ideas into exceptional
                  digital products. We ideate, design, and develop data-driven
                  digital products made to answer business challenges.
                </p>
                <p>
                  We offer 360° services to smoothly guide you on your way to
                  creating a seamless digital masterpiece projects on budget and
                  on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
