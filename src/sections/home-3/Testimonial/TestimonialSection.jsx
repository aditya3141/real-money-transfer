import TestimonialCardOne from "@components/Cards/Testimonial/One";
import SectionHeading from "@components/Layout/SectionHeading";
import data from "./data";
import Button from "@components/Buttons";

const settingProps = {
  sectionHeading: {
    title: "People all over the world use snaga for their fitness",
    buttonText: "View All Reviews",
    classes: {
      row: "text-center text-lg-initial justify-content-center justify-content-lg-between",
      title: "heading-md text-black",
      button: "btn-primary-l03 btn-shadow rounded-pill",
      columnLeft: "col-xxl-6 col-lg-7 col-md-9 col-11",
      columnRight: "col-xl-3 col-md-4",
    },
  },
};
const TestimonialSection = () => {
  return (
    <div className="home-3_testimonial section-padding-120" id="testimonial">
      <div className="container">
        <SectionHeading type="double" {...settingProps.sectionHeading}>
          <Button
            href="#"
            animation={false}
            className="btn-primary-l03 btn-shadow rounded-pill"
          >
            View All Reviews
          </Button>
        </SectionHeading>
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
      </div>
    </div>
  );
};

export default TestimonialSection;
