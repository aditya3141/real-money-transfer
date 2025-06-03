import { Accordion } from "react-bootstrap";
import { AccordionContext, useAccordionButton } from "react-bootstrap";
// import AccordionTrigger from "../AccordionTrigger/AccordionTrigger";
import { useContext } from "react";
import AccordionTrigger from "../../AccordionTrigger/AccordionTrigger";

const AccordionItem = ({
  question,
  answer,
  accKey: eventKey,
  className,
  callback,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <AccordionTrigger
      decoratedOnClick={decoratedOnClick}
      isCurrentEventKey={isCurrentEventKey}
      className={className}
    >
      <div
        className={`accordion-button ${isCurrentEventKey ? "collapsed" : ""}`}
      >
        <i className="fa-solid fa-question"></i>
        {question}
      </div>

      <Accordion.Collapse eventKey={eventKey}>
        <div className="accordion-item__body">{answer}</div>
      </Accordion.Collapse>
    </AccordionTrigger>
  );
};

export default AccordionItem;
