import AccordionItem from "@components/Accordion/Seven/AccordionItem/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import data from "./data";
const FaqContentSectionFour = () => {
  return (
    <>
      <div className="accordion-style-7-wrapper">
        <Accordion defaultActiveKey="0">
          <div className="accordion-style-7">
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
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default FaqContentSectionFour;
