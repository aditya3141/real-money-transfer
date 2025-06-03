import Button from "@components/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="home-7_hero-section" id="hero">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-xxl-auto col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-8 col-8"
            data-aos-duration={1000}
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="home-7_hero-image">
              <img
                className="hero-image"
                src="/image/home-7/hero.png"
                alt="hero image"
              />
            </div>
          </div>
          <div
            className="col-xxl-auto col-xl-7 col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-7_hero-content">
              <div className="home-7_hero-content-text">
                <span className="badge badge--white">
                  Top-Rated Website Hosting Provider
                </span>
                <h1 className="hero-content__title heading-xxl fw-700">
                  Fast &amp; reliable web hosting for your website
                </h1>
                <p>
                  Save time and money with a simple and reliable cloud hosting
                  trusted by 90,000+ agencies, developers, and businesses who
                  demand high performance from their websites!
                </p>
              </div>
              <div className="home-7_hero-content-button">
                <Button
                  href="#"
                  animation={false}
                  className="btn-masco btn-primary-l07 rounded-pill btn-shadow"
                >
                  Start a 10-day free trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
