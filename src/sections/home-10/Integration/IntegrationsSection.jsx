import Button from "@components/Buttons/Button";

const IntegrationSection = () => {
  return (
    <div
      className="home-10_integration-section padding-bottom-120 bg-offwhite-2 "
      id="integration"
    >
      <div className="container">
        <div className="row row--custom ">
          <div
            className=" col-xl-5 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-10_integration-image content-image--mobile-width">
              <img
                src="/image/home-10/integration-image.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="offset-lg-1 col-xl-6 col-lg-6 col-md-9 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content_text-block">
                <h2 className="content_title heading-lg heading-lg--clash-display text-black-3">
                  Masco works on your favorite website also
                </h2>
                <p>
                  Connect our software with the apps you use and love. Easily
                  bring AI into your workflow to improve and create content
                  wherever you are.
                </p>
              </div>
              <div className="home-10_integration-button">
                <Button
                  href="#"
                  animation={false}
                  className="btn-masco btn-primary-l10 rounded-pill btn-fill--slide-left"
                >
                  <span>Add Masco to Chrome</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
