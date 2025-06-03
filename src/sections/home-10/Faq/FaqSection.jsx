import Accordion from "react-bootstrap/Accordion";
import data from "./data";
import AccordionItem from "@components/Accordion/Five/AccordionItem/AccordionItem";
import Button from "@components/Buttons/Button";
const FaqSection = () => {
  return (
    <>
      <div className="home-10_faq-section section-padding-120" id="faq">
        <div className="container">
          <div className="row row--custom">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 col-xs-10">
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-lg heading-lg--clash-display text-black-3">
                    Discover the answers to the questions
                  </h2>
                  <p>
                    People ask about our AI writing tool. We are always ready to
                    answer all your questions. Also, some questions and answers
                    are highlighted
                  </p>
                </div>
                <div className="content-button-block">
                  <Button
                    href="#"
                    animation={false}
                    className="btn-masco btn-primary-l10 rounded-pill btn-fill--slide-left"
                  >
                    <span>Ask you questions</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-5 col-md-10">
              <div className="accordion-style-5" id="home-10-faq-2">
                <Accordion defaultActiveKey="0">
                  {data?.map(({ title, body }, index) => {
                    return (
                      <AccordionItem
                        key={index}
                        className="accordion-item"
                        question={title}
                        answer={body}
                        accKey={index.toString()}
                      />
                    );
                  })}
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
