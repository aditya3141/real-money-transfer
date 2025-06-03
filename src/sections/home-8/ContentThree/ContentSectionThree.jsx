import Button from "@components/Buttons/Button";
const ContentSectionThree = () => {
  return (
    <div className="home-8_content-section-3 section-padding-120 bg-cream">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="offset-xxl-1 col-xl-6  col-lg-7 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-8_content-image-3 content-image--mobile-width">
              <img
                src="/image/home-8/content-image-3.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-5 col-md-8 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-lg text-black-2">
                  Simple, powerful &amp; efficient process
                </h2>
                <p>
                  We follow the best yet official and simple working process to
                  maximize your business growth. We'll cover everything from
                  strategy, marketing and growth.
                </p>
              </div>
              <div className="content-button-block">
                <Button
                  href="#"
                  animation={false}
                  className="btn-masco btn-primary-l08 btn-fill--slide"
                >
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionThree;
