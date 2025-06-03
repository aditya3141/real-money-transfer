import ContentWidget from "@components/Widgets/Content/ContentWidget";
import data from "./data";
const ContentSectionTwo = () => {
  return (
    <div className="home-9_content-section-2 section-padding-120 bg-offwhite-dark">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="offset-lg-1 col-xl-4 col-lg-3 col-md-4 col-sm-5 col-xs-5 col-5"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-9_content-image-2-block ">
              <div className="home-9_content-image-2 ">
                <img
                  src="/image/home-9/content-image-2.png"
                  alt="alternative text"
                />
              </div>
              <div className="home-9_content-image-2-shape absolute-center">
                <img
                  src="/image/home-9/content-image-2-shape.svg"
                  alt="alternative text"
                />
              </div>
              <div className="home-9_content-image-2-shape-2 ">
                <img
                  src="/image/home-9/content-image-2-shape-2.svg"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-auto col-xl-6 col-lg-7 col-md-11 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-lg heading-lg--syne text-black-3">
                  Organize all schedules with simple processes
                </h2>
                <p>
                  Masco is an intuitive, lightweight solution for tracking hours
                  and projects that is easy to adopt and use every day, we've
                  designed it to be super fast.
                </p>
              </div>
              <div className="content-widget-wrapper">
                {data?.map((item, index) => (
                  <ContentWidget key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
