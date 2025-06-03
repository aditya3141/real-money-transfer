import Button from "@components/Buttons";

const HeroSection = () => {
  return (
    <div className="home-2_hero-section section-padding-120" id="hero">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-lg-5 col-md-7 col-xs-8 col-10"
            data-aos-duration={1000}
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="home-2_hero-image-block">
              <div className="home-2_hero-image">
                <img src="/image/home-2/hero-image.png" alt="hero image" />
                <div className="home-2_hero-image-shape">
                  <img
                    src="/image/home-2/hero-image-shape.svg"
                    alt="hero shape"
                  />
                </div>
                <div className="home-2_hero-image-man-1">
                  <img
                    src="/image/home-2/hero-image-man-1.png"
                    alt="hero shape"
                  />
                </div>
                <div className="home-2_hero-image-man-2">
                  <img
                    src="/image/home-2/hero-image-man-2.png"
                    alt="hero shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-auto col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-2_hero-content">
              <div className="home-2_hero-content-text">
                <h1 className="hero-content__title heading-xl text-black">
                  Engage your customers with real-time chat
                </h1>
                <p>
                  Snaga is a complete customer service platform that connects
                  with your website visitors in real-time to convert new leads,
                  close more deals, and provide better support to your
                  customers.
                </p>
              </div>
              <div className="home-2_hero-button-group">
                <Button
                  href="/contact"
                  className="btn-primary-l02 btn-fill--up"
                >
                  Start a 10-day free trial
                </Button>
                <Button href="/about" className="btn-outline-l02 btn-fill--up">
                  Learn more
                </Button>
              </div>
              <div className="home-2_hero-content-button__bottom-text">
                <span>
                  <img src="/image/icons/icon-star-green.svg" />
                  Rated 4.9/5 - from over 600 reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
