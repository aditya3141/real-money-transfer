import Button from "@components/Buttons";

const HeroSection = () => {
  return (
    <div className="home-6_hero-section" id="hero">
      <div className="home-6_hero-shape">
        <img
          className="hero-shape-1"
          src="/image/home-6/envelope-open.svg"
          alt="image shape"
        />
        <img
          className="hero-shape-2"
          src="/image/home-6/envelope.svg"
          alt="image shape"
        />
        <img
          className="hero-shape-3"
          src="/image/home-6/pen.svg"
          alt="image shape"
        />
      </div>

      <div className="container">
        <div className="row row--custom">
          <div className="col-md-9">
            <div className="home-6_hero-content-block">
              <div className="home-6_hero-text-block">
                <h1 className="heading-xl heading-xl--general-sans text-black hero-content__title">
                  <span>
                    Start a conversation in the{" "}
                    <span className="hero-content__title-color-bg">
                      email world
                    </span>
                  </span>
                </h1>
                <p>
                  Masco is a cold email software that lets you communicate B2B
                  with ease. A key reason for this is that 80% of people prefer
                  sales representatives to contact them via email.
                </p>
              </div>
              <div className="home-6_hero-button-block">
                <Button href="/quote">Get Started</Button>
                <Button
                  className="btn-outline btn-padding-x-33"
                  animation={false}
                  icon={() => <div className="play-icon" />}
                  iconPosition="before"
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-11 col-xxl-10">
            <div
              data-aos="fade-up"
              data-aos-duration={1000}
              className="home-6_hero-image-block"
            >
              <img
                className="w-100"
                src="/image/home-6/hero-image.png"
                alt="alternative text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
