import SectionHeading from "@components/Layout/SectionHeading";
import ServiceData from "./data";
import ServiceCardOne from "@components/Cards/Service/One";

let settings = {
  SectionHeading: {
    title: "All the digital services that are convenient for you",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      title: "heading-md text-black",
      className: "text-center",
      row: "justify-content-center",
    },
  },
};
const ServiceSection = () => {
  return (
    <div className="home-1_service-section padding-bottom-120" id="feature">
      <div className="home-1_service-section-shape">
        <img src="/image/home-1/service-section-shape.svg" alt="image" />
      </div>
      <div className="container">
        <div className="home-1_service-section-wrapper">
          <SectionHeading {...settings.SectionHeading} />
          <div className="row gutter-y-default justify-content-center">
            {ServiceData.map((item, index) => {
              return (
                <div key={index} className="col-xl-6 col-lg-6 col-md-10">
                  <ServiceCardOne
                    className=" hvr-fill"
                    {...item}
                    to={"/service-details"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
