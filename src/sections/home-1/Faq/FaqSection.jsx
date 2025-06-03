import SectionHeading from "@components/Layout/SectionHeading";
import { Accordion } from "react-bootstrap";
import data from "./data.json";

let settings = {
  sectionHading: {
    classes: {
      row: "justify-content-center",
      className: "text-center",
      title: "heading-md text-black",
    },
  },
};

const Faq = () => {
  return (
    <div className="home-1_faq-section section-padding-120">
      <div className="home-1_faq-shape-1">
        <img src="/image/home-1/faq-shape-1.svg" alt="image" />
      </div>
      <div className="home-1_faq-shape-2">
        <img src="/image/home-1/faq-shape-2.svg" alt="image" />
      </div>
      <div className="container">
        <SectionHeading
          title="Frequently asked questions about our digital agency"
          column="col-xxl-6 col-xl-7 col-lg-8 col-md-9"
          classes={settings.sectionHading.classes}
        />

        <div className="row row--custom">
          <div className="col-lg-10">
            <div className="accordion-style-1" id="home-1-faq">
              <Accordion className="accordion-style" defaultActiveKey="0">
                {data?.map(({ title, body }, index) => {
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
          <a href="#" className="btn-masco rounded-pill btn-fill--up">
            <span>Still, have any questions? Contact us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
