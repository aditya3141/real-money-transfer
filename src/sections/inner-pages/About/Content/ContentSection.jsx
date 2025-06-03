import { useState } from "react";
import ModalVideo from "react-modal-video";

const ContentSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="about_content-section bg-light-2  section-padding-120">
        <div className="container">
          <div className="row row--custom ">
            <div className="col-xxl-6 col-lg-5 col-md-6 col-7">
              <div className="about_content-image-block ">
                <div className="about_content-image content-image--mobile-width">
                  <img
                    src="/image/about/video-image.png"
                    alt="alternative text"
                  />
                </div>
                <ModalVideo
                  channel="youtube"
                  youtube={{ mute: 0, autoplay: 0 }}
                  isOpen={isOpen}
                  videoId="zo9dJFo8H8g"
                  onClose={() => setOpen(false)}
                />
                <button
                  style={{ border: "none" }}
                  onClick={() => setOpen(true)}
                  className="absolute-center btn-play sonar-emitter "
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
            <div
              className="col-xxl-6 col-lg-7 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-md text-black">
                    Our vision is to build brands and provide world-class
                    experiences to our clients
                  </h2>
                  <p>
                    SINCE 1998, we transform bold business ideas into
                    exceptional digital products. We ideate, design, and develop
                    data-driven digital products made to answer business
                    challenges.
                  </p>
                  <div className="content-divider" />
                </div>
                <div className="content-testimonial">
                  <div className="content-testimonial__text">
                    <p>
                      “We love what we do &amp; create partnerships with our
                      clients to ensure their digital transformation is
                      positioned for long-term success.”
                    </p>
                  </div>
                  <div className="content-testimonial__user-metadata">
                    <div className="content-testimonial__user">
                      <img
                        src="/image/about/user-image.png"
                        alt="alternative text"
                      />
                    </div>
                    <div className="content-testimonial__body">
                      <h4 className="content-testimonial__user-name">
                        Karen Lynn
                      </h4>
                      <span>CEO &amp; Co-founder @ Company</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
