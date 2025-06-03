import TestimonialWidgetTwo from "@components/Widgets/Testimonial/Two/TestimonialWidgetTwo";

const TestimonialSection = () => {
  return (
    <div className="home-4_testimonial-section padding-bottom-120 bg-cream">
      <div className="container position-relative z-1">
        <div className="home-4_testimonial-section__shape">
          <img
            src="/image/home-4/testimonial-shape.svg"
            alt="section divider"
          />
        </div>
        <div className="home-4_testimonial-section__shape-2">
          <img
            src="/image/home-4/testimonial-shape-2.svg"
            alt="section divider"
          />
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-xxl-7 col-lg-8 col-md-10">
            <div className="section-heading">
              <h2 className="section-heading__title heading-md text-black heading-md--dm-sans">
                Learners like you achieve their goals through our courses
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-y-30 justify-content-center">
          <div
            className="col-lg-6 col-md-10"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <TestimonialWidgetTwo
              text="The online class professionals were truly a lifesaver. Without their expertise and kind help I could not have achieved the best results in my class. I followed what they said and they helped me get the best grades."
              author_image="/image/home-4/testimonial-authour-1.png"
              author_name="Kristin Watson"
              author_position="Student of Cambridge University, UK"
            />
          </div>
          <div
            className="col-lg-6 col-md-10"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <TestimonialWidgetTwo
              text="I actually wanted to learn more than what was taught. I knew I couldn't be a designer, but I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course now I am a good designer."
              author_image="/image/home-4/testimonial-authour-2.png"
              author_name="Kristin Watson"
              author_position="UI/UX designer, USA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
