import AccordionItem from "@components/Accordion/Seven/AccordionItem/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import data from "./data";

const FaqSection = () => {
  return (
    <>
      <div className="faq-3_main-section section-padding-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-10">
              <div className="accordion-style-7-wrapper">
                <h2 className="heading-sm mb-40">General Question</h2>

                <Accordion defaultActiveKey="0">
                  <div className="accordion-style-7">
                    {data?.generalFaqItems?.map(({ title, body }, index) => {
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
                  </div>
                </Accordion>
              </div>
              <div className="accordion-style-7-wrapper">
                <h2 className="heading-sm mb-40">Account & Support</h2>
                <Accordion defaultActiveKey="0">
                  <div className="accordion-style-7">
                    {data?.supportFaqItems?.map(({ title, body }, index) => {
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
                  </div>
                </Accordion>
                {/* <div className="accordion-style-7"> */}
                {/* <Accordion defaultActiveKey="0">
                    {data?.supportFaqItems?.map(({ title, body }, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          className="accordion-item"
                          question={title}
                          answer={body}
                          accKey={index.toString()}
                          // eventKey={index}
                        />
                      );
                    })}
                  </Accordion> */}
                {/* {# Faq Single #}
                  {{Accordion.item({
                  id:"faq-2_faq-item-4",
                  parent:"faq-2_faq",
                  title:"Q. What kind of support do I get from any plan?",
                  body:"A digital agency is a company that leverages digital channels to grow their clients’ brands online.
                  ls and technologies such as web design, digital marketing, creative design and app development."
                })}}
                     {# Faq Single #}
                {{Accordion.item({
                  id:"faq-2_faq-item-5",
                  parent:"faq-2_faq",
                  title:"Q. Do I have a promotional or discount code?",
                  body:"A digital agency is a company that leverages digital channels to grow their clients’ brands online.
                  ls and technologies such as web design, digital marketing, creative design and app development."
                })}}
                    {# Faq Single #}
                {{Accordion.item({
                  id:"faq-2_faq-item-6",
                  parent:"faq-2_faq",
                  title:"Q. What kind of support do I get from any plan?",
                  body:"A digital agency is a company that leverages digital channels to grow their clients’ brands online.
                  ls and technologies such as web design, digital marketing, creative design and app development."
                })}} */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="section-button">
            <a href="#" className="btn-masco btn-fill--up rounded-pill">
              <span>Still, have any questions? Contact us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
