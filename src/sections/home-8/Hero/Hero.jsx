import Button from "@components/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="home-8_hero-section" id="hero">
      <div className="particles">
        <img
          src="/image/home-8/particle-circle-1.svg"
          alt="image"
          className="particle-1"
        />
        <img
          src="/image/home-8/particle-circle-2.svg"
          alt="image"
          className="particle-2"
        />
        <img
          src="/image/home-8/particle-circle-3.svg"
          alt="image"
          className="particle-3"
        />
      </div>
      <div className="section-divider">
        <img
          src="/image/home-8/section-devider-black.svg"
          alt=" section divider"
        />
      </div>
      <div className="container">
        <div className="row row--custom">
          <div className="col-lg-8 col-md-9">
            <div className="home-8_hero-content-block">
              <div className="home-8_hero-text-block">
                <h1 className="heading-xl heading-xl--public-sans hero-content__title">
                  Grow your business to the next level
                </h1>
                <p>
                  Starting a business can be daunting, but you can make it
                  easier with us. We're skilled in team-building strategies for
                  your business's success.
                </p>
              </div>
              <div className="home-8_hero-button-group">
                <Button
                  animation={false}
                  href="#"
                  className="btn-masco btn-primary-l08 btn-fill--slide"
                >
                  <span>Get In Touch</span>
                </Button>
                <Button
                  animation={false}
                  href="#"
                  className="btn-masco btn-outline-l08 btn-fill--slide-reverse"
                >
                  <span>View Services</span>
                </Button>
              </div>
              <div className="home-8_hero-content-shape">
                <img src="/image/home-8/content-shape.svg" alt="image alt" />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="home-8_hero-image-wrapper">
              <div className="single-image">
                <img
                  src="/image/home-8/hero-image-1.png"
                  alt="image alt"
                  data-aos="fade-up"
                  data-aos-delay={400}
                />
              </div>
              <div className="single-image">
                <img
                  src="/image/home-8/hero-image-2.png"
                  alt="image alt"
                  data-aos="fade-up"
                  data-aos-delay={500}
                />
              </div>
              <div className="single-image">
                <img
                  src="/image/home-8/hero-image-3.png"
                  alt="image alt"
                  data-aos="fade-up"
                  data-aos-delay={600}
                />
              </div>
              <div className="single-image">
                <img
                  src="/image/home-8/hero-image-4.png"
                  alt="image alt"
                  data-aos="fade-up"
                  data-aos-delay={700}
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
