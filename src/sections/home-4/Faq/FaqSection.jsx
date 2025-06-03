import AccordionItem from "@components/Accordion/Two/AccordionItem";
import data from "./data";
import Accordion from "react-bootstrap/Accordion";

const FaqSection = () => {
  return (
    <div
      className="home-4_faq-section section-padding-100 bg-cream-dark"
      id="faq"
    >
      <div className="container">
        <div className="row">
          <div className=" col-lg-6 col-md-10">
            <div className="section-heading">
              <h2 className="section-heading__title heading-md text-black heading-md--dm-sans">
                Frequently asked questions about our courses
              </h2>
              <p>
                We encourage our students and teachers to ask us any questions
                regarding our courses and classes. Our skilled mentors are ready
                to answer all your questions 24/7.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="accordion-style-2" id="home-4_faq">
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
  );
};

export default FaqSection;
