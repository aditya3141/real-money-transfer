import Button from "@components/Buttons";

const HeroSection = () => {
  return (
    <div className="home-4_hero-section bg-cream" id="hero">
      <div className="home-4_hero-shape">
        <img
          className="hero-shape-1"
          src="/image/home-4/hero-shape.png"
          alt="Hero Shape"
        />
        <img
          className="hero-shape-2"
          src="/image/home-4/hero-shape-2.png"
          alt="Hero Shape"
        />
      </div>
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-xxl-auto col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-8 col-8"
            data-aos-duration={1000}
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="home-4_hero-image">
              <img
                className="hero-image"
                src="/image/home-4/hero.png"
                alt="hero image"
              />
              <div className="home-4_hero-image-shape">
                <img
                  src="/image/home-4/hero-image-shape.svg"
                  alt="hero image shape"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-auto col-xl-7 col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-4_hero-content">
              <div className="home-4_hero-content-text">
                <h1 className="hero-content__title text-black heading-xl heading-xl heading-xl--dm-sans">
                  Keep learning and boost your knowledge
                </h1>
                <p>
                  Looking to add new skills? We’re a leading destination for
                  online education and world-class education anywhere. We give
                  you many courses and the freedom to learn what you want.
                </p>
              </div>
              <div className="home-4_hero-content-button">
                <Button
                  role="route"
                  href="/contact"
                  animation={false}
                  className="btn-masco btn-primary-l04 btn-shadow btn-shadow--reverse btn-shadow--reverse-center rounded-pill"
                >
                  Start a free course
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
