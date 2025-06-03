import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

let settingProps = {
  sectionHeading: {
    title: "Most of our satisfied clients leave their feedback",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      row: "justify-content-center text-center",
      title: "heading-md text-black",
    },
  },
};

const TestimonialSection = () => {
  return (
    <div
      className="home-1_testimonial-section section-padding-120 bg-light-2"
      id="testimonial"
    >
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />

        <div className="testimonial-widget-large">
          <div className="row row--custom ">
            <div
              className="col-lg-6 col-md-8 col-sm-10 col-xs-10"
              data-aos-duration={1000}
              data-aos="fade-right"
            >
              <div className="testimonial-widget-large__image">
                <img
                  src="/image/home-1/testimonial-image.png"
                  alt="handsome-smiling-bearded-man-glasses-working-laptop"
                />
              </div>
            </div>
            <div
              className=" col-lg-6 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="testimonial-widget-large__body">
                <div className="testimonial-widget-large__icon">
                  <img
                    src="/image/home-1/testimonial-icon.svg"
                    alt="testimonial icon"
                  />
                </div>
                <p className="testimonial-widget-large__review-text">
                  They’re probably one of the easiest vendors I’ve ever worked
                  with in the digital space. They have our best interests in
                  mind. The team went the extra mile in negotiating costs and
                  delivering within a flexible scope. They’re customer focused
                  and strong in terms of development quality.
                </p>
                <h4 className="testimonial-widget-large__user-name">
                  Dominika Drońska
                </h4>
                <span className="testimonial-widget-large__user-position">
                  Senior Digital Marketing Manager, Abbey Road Studios
                </span>
                <div className="testimonial-widget-large__link">
                  <Link to="/" className="btn-link btn-arrow">
                    Read more reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
