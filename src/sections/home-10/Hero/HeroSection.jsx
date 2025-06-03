import Button from "@components/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="home-10_hero-section" id="hero">
      <div className="container">
        <div className="home-10_hero-section-wrapper">
          <div className="row row--custom">
            <div className="col-lg-5 col-md-6 col-sm-7 col-xs-8 col-10">
              <div className="home-10_hero-image-block">
                <div className="home-10_hero-image">
                  <img src="/image/home-10/hero-image.png" alt="hero image" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="home-10_hero-content-block">
                <div className="home-10_hero-text-block">
                  <h1 className="hero-content__title heading-xl heading-xl--v2">
                    Create great content quickly with AI Writer
                  </h1>
                  <p>
                    Masco is a generative AI platform for businesses that helps
                    you quickly create content writing, captions, headlines,
                    blog posts, etc. It is an all-in-one content AI writing
                    platform that saves you time and money.
                  </p>
                </div>
                <div className="home-10_hero-button-group">
                  <Button
                    href="#"
                    animation={false}
                    className="btn-masco btn-primary-l10 rounded-pill btn-fill--slide-left"
                  >
                    <span>
                      <span>Get started— it's free</span>
                    </span>
                  </Button>
                  <Button
                    href="#"
                    animation={false}
                    className="btn-masco btn-outline-l10 rounded-pill btn-fill--slide-left"
                  >
                    <span>
                      <span>Schedule a demo</span>
                    </span>
                  </Button>
                </div>
                <div className="home-10_button-bottom-rating">
                  <img
                    src="/image/icons/trustpilot.png"
                    alt="trustpilot image"
                  />
                  <div>
                    <span className="review-text">
                      <img
                        src="/image/icons/Star-yellow-2.svg"
                        alt="star image"
                      />
                      4.8/5 Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
