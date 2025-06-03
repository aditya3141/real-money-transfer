import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const settingProps = {
  sectionHeading: {
    title: "Choosing us is a good decision for your business",
    text: "We want you to unlearn everything that has been holding you back. Stop waiting for that magical moment when all the stars align and take that first step.",
    column: "col-xxl-7 col-xl-8 col-lg-9 col-md-10 ",
    classes: {
      row: "justify-content-center text-center",
    },
  },
};
const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="home-8_video-section padding-bottom-120 bg-cream">
        <div className="home-8_video-shape">
          <img src="/image/home-8/video-shape.svg" alt="image alt" />
        </div>
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row">
            <div className="col-lg-12">
              <div className="home-8_hero-video-block">
                <img src="./image/home-8/video-image.png" alt="image video" />
                <ModalVideo
                  channel="youtube"
                  youtube={{ mute: 0, autoplay: 0 }}
                  isOpen={isOpen}
                  videoId="L61p2uyiMSo"
                  onClose={() => setOpen(false)}
                />
                <button
                  style={{ border: "none" }}
                  onClick={() => setOpen(true)}
                  className="btn-play absolute-center btn-play--green  "
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
