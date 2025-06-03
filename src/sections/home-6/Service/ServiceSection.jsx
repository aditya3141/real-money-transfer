import ServiceCardOne from "@components/Cards/Service/One/CardStyleOne";
import data from "./data.json";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

const settingProps = {
  sectionHeading: {
    title: "Our cold email software has many benefits to help you",
    column: "col-xxl-6 col-xl-7 col-lg-8",
    classes: {
      title: "heading-md heading-md--general-sans text-l5-secondary",
      row: "justify-content-center text-center",
    },
  },
};
const ServiceSection = () => {
  return (
    <div className="home-6_service-section section-padding-120" id="services">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />

        <div className="row gutter-y-default justify-content-center">
          {data?.map(({ iconSrc, title, description }, index) => (
            <div key={index} className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
              <ServiceCardOne
                iconSrc={iconSrc}
                title={title}
                description={description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
