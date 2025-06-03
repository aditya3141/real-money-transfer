import Button from "@components/Buttons/Button";
import data from "./data.json";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import TestimonialWidget from "@components/Widgets/Testimonial/LargeThree/TestimonialWidget";
import Slider from "react-slick";

const settingProps = {
  sectionHeading: {
    type: "double",
    title: "90% of users say that Masco has helped them",
    classes: {
      title: "heading-lg heading-lg--clash-display text-black-3",
      row: "justify-content-center justify-content-lg-start text-center text-md-initial align-items-center",
      columnLeft: "col-xxl-7 col-lg-8 col-md-8 col-sm-11 col-xs-10",
      columnRight: "col-xxl-5 col-md-4 col-xs-6 col-8",
    },
  },
};

const TestimonialSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className="home-10_testimonial-section section-padding-120"
        id="testimonial"
      >
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading}>
            <Button
              animation={false}
              className=" btn-primary-l10 rounded-pill btn-fill--slide-left"
            >
              View all reviews
            </Button>
          </SectionHeading>
          <div className="row">
            <Slider className="row  home-10_testimonial-widget-wrapper">
              {data?.map((item, index) => (
                <div className="single-slide" key={index}>
                  <TestimonialWidget {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
