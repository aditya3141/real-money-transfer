import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

const FactSection = () => {
  const settingProps = {
    sectionHeading: {
      title: "We are the best from our client's point of view",
      column: "col-xxl-6 col-xl-7 col-lg-8 col-md-10",
      classes: {
        title: "heading-md heading-md--general-sans text-l5-secondary",
        row: "justify-content-center text-center",
      },
    },
  };
  return (
    <div
      className="home-5_testimonial-section padding-bottom-120 bg-offwhite-3"
      id="testimonial"
    >
      <div className="container">
        <div className="home-5_testimonial-wrapper">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row row--custom">
            <div className="col-lg-4 col-md-5 col-sm-6 col-7">
              <div className="testimonial-widget-3__image-block">
                <img
                  src="/image/home-5/testimonial-image-shape.svg"
                  alt="testimonial image"
                />
                <div className="testimonial-widget-3__image absolute-center">
                  <img
                    src="/image/home-5/testimonial-image.png"
                    alt="testimonial image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 ">
              <div className="testimonial-widget-3">
                <div className="testimonial-widget-3__text-block">
                  <div className="testimonial-widget-3__icon">
                    <img src="/image/home-6/quote.png" alt="" />
                  </div>
                  <p>
                    “We are very satisfied with the SEO services we have
                    received from Masco so far. Although SEO has only been
                    around for a short time, we are already seeing a positive
                    step in our page rank. We would recommend Masco's SEO
                    services to anyone looking to increase their web exposure."
                  </p>
                  <div className="testimonial-widget-3__user-block">
                    <h4 className="testimonial-widget-3__user-name">
                      Anjilia Smith
                    </h4>
                    <span className="testimonial-widget-3__user-position">
                      Marketing Officer at Company
                    </span>
                  </div>
                </div>
                <div className="testimonial-widget-3__button">
                  <a
                    href="#"
                    className="btn-masco btn-primary-l05 btn-fill--up"
                  >
                    <span>View 1000+ Happy Clients Reviews</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSection;
