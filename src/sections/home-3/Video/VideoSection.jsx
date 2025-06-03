import { useState } from "react";
import ModalVideo from "react-modal-video";
import SectionHeading from "@components/Layout/SectionHeading";
import data from "./data.json";
import Button from "@components/Buttons";
import { ButtonPlay } from "@components/Buttons/Button";
let settings = {
  sectionHading: {
    classes: {
      row: "justify-content-center",
      className: "text-center",
      title: "heading-md text-black",
    },
  },
};

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenTwo, setOpenTwo] = useState(false);
  const [isOpenThree, setOpenThree] = useState(false);

  const openArray = [setOpen, setOpenTwo, setOpenThree]; // Corrected the assignment of functions// Corrected the assignment of functions
  const openStatusArray = [isOpen, isOpenTwo, isOpenThree];

  const funcExecute = (index, status) => {
    if (status === "open") {
      openArray[index](true); // Call the functions to set the state
    } else {
      openArray[index](false); // Call the functions to set the state
    }
  };

  return (
    <div className="home-3_video-section section-padding" id="courses">
      <div className="home-3_video-shape">
        <img src="/image/home-3/video-shape.svg" alt="" />
      </div>
      <div className="container">
        <SectionHeading
          title="Discover classes and guides based on your interests"
          column="col-xxl-6 col-xl-7 col-lg-8 col-md-9"
          classes={settings.sectionHading.classes}
        />
        <div className="row gutter-y-40 justify-content-center">
          {data?.map((items, index) => (
            <div
              className="col-lg-4 col-md-6 transform-none"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              key={index}
            >
              <div className="video-widget">
                <div className="video-widget__thumbnail-wrapper">
                  <div className="video-widget__thumbnail">
                    <img src={items.thumbnail} alt="image" />
                    <ModalVideo
                      channel="youtube"
                      youtube={{ mute: 0, autoplay: 0 }}
                      isOpen={openStatusArray[index]}
                      videoId="zo9dJFo8H8g"
                      onClose={() => funcExecute(index, "close")}
                    />
                    <ButtonPlay
                      setOpen={() => funcExecute(index, "open")} // Pass a function here
                      className="absolute-center btn-play--outline btn-play--70 cursor-pointer"
                    />
                  </div>
                </div>
                <h3 className="video-widget__title">{items.title}</h3>
                <p>{items.description}</p>
              </div>
            </div>
          ))}

          <div className="section-button">
            <Button
              href="#"
              animation={false}
              className="btn-primary-l03 rounded-pill btn-shadow"
            >
              View All Classes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
