import data from "./data";
const TestimonialSection = () => {
  return (
    <div
      className="home-9_testimonial-section padding-bottom-150"
      id="testimonial"
    >
      <div className="container">
        <div className="row row--custom">
          <div className="col-lg-7">
            <div className="intagrate-block">
              <h2 className="heading-lg heading-lg--syne text-black-3 content-title">
                Integrate time tracker with 70+ popular tools
              </h2>
              <div className="home-9_integrate-brand-wrapper">
                <div className="row brand-image-row">
                  {data?.map((imgSrc, index) => (
                    <div key={index} className="col-6 col-sm-6 col-lg-3">
                      <div className="home-9_integrate-brand-image">
                        <img src={imgSrc} alt="image alt" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="testimonial-widget-large-2">
              <div className="testimonial-widget-large-__icon content-image--mobile-width">
                <img
                  src="/image/home-9/testimonial-icon.svg"
                  alt="testimonial icon"
                />
              </div>
              <p className="testimonial-widget-large-2__review-text">
                "My hours are great for keeping track of time spent on different
                projects. Masco makes my mandatory timesheets at the end of the
                week much faster."
              </p>
              <div className="testimonial-widget-large-2__body">
                <div className="testimonial-widget-large-2__user-image">
                  <img src="/image/home-9/user-image.png" alt="image alt" />
                </div>
                <div className="testimonial-widget-large-2__user-metadeta">
                  <h4 className="testimonial-widget-large-2__user-name">
                    Dominika Smith
                  </h4>
                  <span className="testimonial-widget-large-2__user-position">
                    Senior Digital Marketing Manager
                  </span>
                </div>
              </div>
              <div className="testimonial-widget-large-2__link">
                <a href="#">
                  Read All Reviews <i className="fa-solid fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
