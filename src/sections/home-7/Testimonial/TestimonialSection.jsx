import Button from "@components/Buttons/Button";
import TestimonialCard from "@components/Cards/Testimonial/Two/TestimonialCard";
import Slider from "react-slick";
import data from "./data.json";
const TestimonialSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="home-7_testimonial-section section-padding-120 bg-light-2"
      id="testimonial"
    >
      <div className="container">
        <div className="row row--custom">
          <Slider
            {...settings}
            className="col-xl-5 col-lg-6 col-md-9 col-sm-11 home-7_testimonial-card-wrapper"
          >
            {data?.map((item, index) => (
              <div className="single-slide" key={index}>
                <TestimonialCard {...item} />
              </div>
            ))}
          </Slider>
          <div className="offset-xl-2 col-xl-5  col-lg-6 col-md-8 col-xs-11">
            <div className="testimonial-content">
              <span className="badge badge--blue">Clients Reviews</span>
              <div className="content">
                <div className="content-text-block">
                  <h2 className="heading-lg heading-lg--cabin text-l7-primary">
                    What users say about our hosting services
                  </h2>
                  <p>
                    Over the last 10 years, Masco has accumulated to many
                    testimonials, reviews, and awards for better service.
                  </p>
                </div>
                <div className="content-button-block">
                  <Button
                    href="#"
                    animation={false}
                    className="btn-masco btn-primary-l07 rounded-pill btn-shadow"
                  >
                    Read All Trustpilot Reviews
                  </Button>
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
