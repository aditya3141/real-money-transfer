import TestimonialCardOne from "@components/Cards/Testimonial/One";
import data from "./data";
import SectionHeading from "@components/Layout/SectionHeading";
import Button from "@components/Buttons/Button";

const settingProps = {
  sectionHeading: {
    title: "Our clients have shared their experiences using Masco",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-10",
    classes: {
      title: "heading-md heading-md--general-sans text-l5-secondary",
      row: "justify-content-center text-center",
    },
  },
};
const TestimonialSection = () => {
  return (
    <>
      <div className="home-6_testimonial section-padding-120" id="testimonial">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />
          <div className="testimonial-masonry">
            {data.map((item, index) => (
              <div
                className="testimonial-masonry-item"
                data-aos="fade-left"
                data-aos-delay={100 * (index + 1)}
                key={index}
              >
                <TestimonialCardOne {...item} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="btn-masco link-box btn-fill--up spacer-top-80">
              <span>Read all the reviews on Trustpilot.com</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
