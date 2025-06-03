import data from "./data"
import TestimonialWidget from "@components/Widgets/Testimonial/One";
import SectionHeading from "@components/Layout/SectionHeading";
import Button from "@components/Buttons";
const settingsProps = {
  sectionHeading:{
    column:"col-xxl-6 col-lg-7 col-md-9",
    classes:{
      title:"heading-md text-black",
      row:"justify-content-center text-center"
    }
  }
}
const TestimonialSection= () => {
    return (
<div className="home-2_testimonial-section section-padding-120 bg-primary-opacity-l2" id="testimonial">
  <div className="container">
    <SectionHeading  title="Trusted by millions of worldwide customers" {...settingsProps.sectionHeading}/>
    <div className="row row--testimonial-widget">
    {data.map((item, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={(index + 1) * 400}
        >
            <TestimonialWidget {...item}/>
        </div>
      ))}
    </div>
    <div className="text-center">
      <Button href="/" className="link-box btn-primary-l02 btn-fill--up spacer-top-80">
        Read all the reviews on Trustpilot.com
      </Button>
    </div>
  </div>
</div>



)
}

export default TestimonialSection;