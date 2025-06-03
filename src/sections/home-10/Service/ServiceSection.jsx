import data from "./data";
import ModalVideo from "react-modal-video";
import SectionHeading from "@components/Layout/SectionHeading";
import Button, { ButtonPlay } from "@components/Buttons/Button";
import AccordionItem from "@components/Accordion/Four/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

const settingProps = {
  sectionHeading: {
    type: "double",
    title: "Amazing content you'll create with AI Writing",
    classes: {
      columnLeft: "col-xxl-7 col-lg-8 col-md-8 col-xs-11",
      columnRight: "col-xxl-auto col-lg-4  col-auto",
      title: "heading-lg heading-lg--clash-display text-black-3",
      row: "justify-content-center text-center text-lg-initial",
    },
  },
};

const ServiceSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="home-10_service-section padding-bottom-150">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading}>
            <Button
              href="#"
              animation={false}
              className="btn-primary-l10 rounded-pill btn-fill--slide-left"
            >
              {" "}
              Get started— it's free
            </Button>
          </SectionHeading>
          ;
          <div className="row row--custom">
            <div className="col-lg-7">
              <div className="home-10_service-video-block">
                <div className="home-10_service-video-image">
                  <img
                    src="/image/home-10/service-image.png"
                    alt="image alt"
                    className="w-100"
                  />
                  <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="zo9dJFo8H8g"
                    onClose={() => setOpen(false)}
                  />
                  <ButtonPlay
                    setOpen={setOpen}
                    className="absolute-center btn-play--blue btn-play--80"
                  ></ButtonPlay>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="accordion-style-4" id="home-10_faq">
                <Accordion defaultActiveKey="0">
                  {data?.map(({ title, body, imgSrc }, index) => (
                    <AccordionItem
                      imgSrc={imgSrc}
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

export default ServiceSection;
