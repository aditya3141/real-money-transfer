import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
const ServiceSection = () => {
  const settingProps = {
    sectionHeading: {
      title: "All the hosting services your business needs",
      column: "col-xxl-6 col-lg-7 col-md-9",
      badge: {
        text: "Unlimited Web Hosting",
        class: "badge badge--blue",
      },
      classes: {
        title: "heading-lg heading-lg--cabin text-l7-primary",
        row: "justify-content-center text-center",
      },
    },
  };
  return (
    <div
      className="home-7_service-section padding-bottom-150 bg-light-2"
      id="services"
    >
      <div className="container">
        <div className="section-heading-wrapper">
          <SectionHeading {...settingProps.sectionHeading} />
        </div>
        <div className="row justify-content-center gutter-y-default">
          {data?.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6"
              data-aos-duration={1000}
              data-aos="fade-left"
              data-aos-delay={item.aos}
            >
              <div className="service-card-2">
                <div className="service-card-2__icon">
                  <img src={item.iconSrc} alt="image alt" />
                </div>
                <div className="service-card-2__body">
                  <h3 className="service-card-2__title ">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
