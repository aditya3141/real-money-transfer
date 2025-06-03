import { Link } from "react-router-dom";

const ContentSectionOne = () => {
  return (
    <div className="home-9_content-section-1 padding-bottom-120 bg-offwhite-dark">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="offset-xl-1 col-lg-4 col-md-4 col-sm-5 col-xs-5 col-5"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-9_content-image-1-block ">
              <div className="home-9_content-image-1 content-image--mobile-width">
                <img
                  src="/image/home-9/content-image-1.png"
                  alt="alternative text"
                />
              </div>
              <div className="home-9_content-image-1-shape absolute-center">
                <img
                  src="/image/home-9/content-image-1-shape.svg"
                  alt="alternative text"
                />
              </div>
              <div className="home-9_content-image-1-shape-2 ">
                <img
                  src="/image/home-9/content-image-1-shape-2.svg"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className=" col-lg-7 col-md-11 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-lg heading-lg--syne text-black-3">
                  Take effective control of your working hours
                </h2>
                <p>
                  Masco automatically tracks time across projects. Instant
                  reports, seamless invoicing and payments, and integrations
                  with the tools your team loves.
                </p>
                <p>
                  It offers unlimited users &amp; projects but a free version
                  with limited features. This makes perfect for teams simple
                  time-tracking needs. It is available as a web app and mobile
                  app for Android and iOS.
                </p>
              </div>
              <div className="content-link-block">
                <Link href="#" className="content-link">
                  Discover More <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
