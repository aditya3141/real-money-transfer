import Button from "@components/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="home-9_hero-section bg-offwhite-dark" id="hero">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-lg-7 col-md-10 col-12"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <div className="home-9_hero-content-block">
              <div className="home-9_hero-text">
                <h1 className="home-9_hero-title heading-xxl heading-xxl--syne text-black-3 fw-700">
                  Make better use of time by tracking it
                </h1>
                <p>
                  Masco time tracking software is a business application that
                  helps you track work hours and increase your productivity
                  without wasting time on paper timesheets or complicated
                  processes.
                </p>
              </div>
              <div className="home-9_hero-button-group">
                <Button
                  href="/quote"
                  animation={false}
                  className="btn-masco btn-primary-l09 rounded-pill btn-fill--down"
                >
                  Start Tracking Your Time…Now!
                </Button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-10"
            data-aos="fade-left"
            data-aos-duration={1000}
          >
            <div className="home-9_hero-image-block">
              <div className="home-9_hero-image">
                <img
                  src="/image/home-9/hero-image.png"
                  alt="alternative text"
                />
              </div>
              <div className="home-9_hero-image-shape-1">
                <img
                  src="/image/home-9/hero-image-shape-1.svg"
                  alt="image alt"
                />
              </div>
              <div className="home-9_hero-image-shape-2">
                <img
                  src="/image/home-9/hero-image-shape-2.svg"
                  alt="image alt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
