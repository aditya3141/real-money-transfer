import SectionHeading from "@components/Layout/SectionHeading";
import { Accordion } from "react-bootstrap";
import data from "./data";
import Button from "@components/Buttons/Button";

let settings = {
  sectionHading: {
    title: "Frequently asked questions about our digital agency",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      row: "justify-content-center",
      className: "text-center",
      title: "heading-md text-black",
    },
  },
};

const FaqSection = () => {
  return (
    <div className="home-1_faq-section section-padding-120">
      <div className="container">
        <SectionHeading {...settings.sectionHading} />

        <div className="row row--custom">
          <div className="col-lg-10">
            <div className="accordion-style-1" id="home-1-faq">
              <Accordion className="accordion-style" defaultActiveKey="0">
                {data?.map(({ title, body, id }, index) => {
                  return (
                    <Accordion.Item eventKey={index} key={index}>
                      <Accordion.Header>{title}</Accordion.Header>
                      <Accordion.Body className="accordion-item__body">
                        {body}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="section-button">
          <Button
            href="#"
            animation={false}
            className="btn-masco rounded-pill btn-fill--up"
          >
            <span>Still, have any questions? Contact us</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
