import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import { ButtonPlay } from "@components/Buttons/Button";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="home-2_content-section-3 padding-bottom-120 bg-primary-l2-faded">
      <div className="container">
        <div className="row row--custom">
          <div className="col-xxl-6 col-lg-8 col-md-11">
            <div className="section-heading">
              <h2 className="content-title heading-md text-black">
                Develop a communication strategy with live video chat
              </h2>
              <p>
                Video conferencing boosts productivity & overall promotes
                collaboration. The advantage of video conferencing is the
                ability to facilitate all of those.
              </p>
            </div>
          </div>
          <div
            className=" col-lg-12"
            data-aos-duration={1000}
            data-aos="fade-up"
          >
            <div className="home-2_content-image-3 ">
              <img src="/image/home-2/video-image.png" alt="alternative text" />
              <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="zo9dJFo8H8g"
                onClose={() => setOpen(false)}
              />
              <ButtonPlay
                setOpen={setOpen}
                className="absolute-center btn-play sonar-emitter "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
