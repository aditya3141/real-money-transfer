import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import AccordionItem from "@components/Accordion/Three/AccordionItem";
import data from "./data.json";
import Accordion from "react-bootstrap/Accordion";

const FaqSection = () => {
  const settingProps = {
    sectionHeading: {
      title: "Some FAQs about our time track software",
      column: "col-xxl-7 col-lg-8 col-md-9",
      classes: {
        title:
          "home-9_section-heading__title heading-lg heading-lg--syne text-black-3",
        row: "justify-content-center text-center",
      },
    },
  };
  return (
    <>
      <div className="home-9_faq-section padding-bottom-120" id="faq">
        <div className="home-9_faq-shape">
          <img src="/image/home-9/faq-shape.svg" alt="image alt" />
        </div>
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row row--custom">
            <div className="col-lg-12">
              <div className="accordion-style-3" id="home-9_faq">
                <Accordion defaultActiveKey="0">
                  {data?.map(({ title, body }, index) => (
                    <AccordionItem
                      key={index}
                      question={title}
                      answer={body}
                      className="accordion-item"
                      accKey={index.toString()}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
