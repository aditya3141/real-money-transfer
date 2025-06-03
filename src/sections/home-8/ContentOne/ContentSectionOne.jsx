import Button from "@components/Buttons/Button";

const ContentSectionOne = () => {
  return (
    <div
      className="home-8_content-section-1 section-padding-120 bg-cream"
      id="about"
    >
      <div className="particles">
        <img
          src="/image/home-8/particle-circle-1.svg"
          alt="image alt"
          className="particle-1"
        />
        <img
          src="/image/home-8/particle-circle-2.svg"
          alt="image alt"
          className="particle-2"
        />
        <img
          src="/image/home-8/particle-circle-3.svg"
          alt="image alt"
          className="particle-3"
        />
      </div>
      <div className="container">
        <div className="row row--custom ">
          <div
            className="col-xxl-5 col-lg-5 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-8_content-image-1-block ">
              <div className="home-8_content-image-1 content-image--mobile-width">
                <img
                  src="/image/home-8/content-image-1.png"
                  alt="alternative text"
                />
              </div>
              <div className="home-8_content-image-1-card">
                <img
                  src="/image/home-8/content-image-1-card.png"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title text-black-2 heading-lg">
                  The story behind our consulting firm
                </h2>
                <p>
                  We have created a space for new and aspiring entrepreneurs to
                  learn how to start &amp; grow their own businesses
                  effectively.
                </p>
                <div className="content-divider" />
                <p>
                  We cover everything from inception to growth &amp; even
                  failure. In a world success is celebrated through the lens of
                  a few, we are here to determine what happens after the
                  elevator pitch.
                </p>
              </div>
              <div className="content-button-block">
                <Button
                  href="#"
                  animation={false}
                  className="btn-masco btn-primary-l08 btn-fill--slide"
                >
                  <span>Learn More</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
