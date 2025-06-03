import { Accordion } from "react-bootstrap";
import { AccordionContext, useAccordionButton } from "react-bootstrap";
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
        {question}
      </div>

      <Accordion.Collapse eventKey={eventKey}>
        <div className="accordion-item__body">{answer}</div>
      </Accordion.Collapse>
    </AccordionTrigger>
  );
};

export default AccordionItem;
