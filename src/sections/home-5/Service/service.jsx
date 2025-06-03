import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
const service = () => {
  const settingProps = {
    sectionHeading: {
      title: "Turn traffic with insanely SEO & growth into revenue",
      column: "col-xxl-6 col-lg-7 col-md-9 col-sm-12 col-xs-11",
      classes: {
        title: "heading-md heading-md--general-sans text-white",
        row: "justify-content-center text-center",
      },
    },
  };
  return (
    <div className="home-5_service-section section-padding-120" id="services">
      <div className="container">
        <div className="home-5_service-section-shape">
          <img src="/image/home-5/service-shape.png" alt="service shape" />
        </div>
        <SectionHeading {...settingProps.sectionHeading} />

        <div className="row justify-content-center gutter-y-50">
          {data?.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-xs-10"
              data-aos="fade-up"
              data-aos-delay="{{100 * loop.index}}"
            >
              <div className="service-widget">
                <h4 className="service-widget__head">{item.id}</h4>
                <div className="service-widget__body">
                  <h4 className="service-widget__title">{item.service}</h4>
                  <p>{item.text}</p>
                </div>

                <a
                  href="./service.html"
                  className=" btn-link btn-arrow service-widget__link"
                >
                  Discover More{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default service;
