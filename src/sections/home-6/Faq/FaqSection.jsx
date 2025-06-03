import AccordionItem from "@components/Accordion/Six/AccordionItem/AccordionItem";
import data from "./data.json";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

import Accordion from "react-bootstrap/Accordion";
const settingProps = {
  sectionHeading: {
    title: "Need more information about cold email? Just ask",
    text: "Creating an effective cold email outreach strategy takes continuous optimization. Our cold email experts help so you can do more deals.",

    classes: {
      title: "fw-600 heading-md heading-md--general-sans text-l5-secondary",
      row: "justify-content-center text-center",
    },
  },
};
<SectionHeading {...settingProps.sectionHeading} />;

const FaqSection = () => {
  return (
    <>
      <div className="home-6_faq-section section-padding-100" id="faq">
        <div className="container">
          <div className="row row--custom">
            <div className="col-lg-6 col-md-10">
              <SectionHeading {...settingProps.sectionHeading} />
            </div>
            <div className="col-lg-6">
              <div className="accordion-style-6" id="home-6_faq">
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
