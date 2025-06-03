import FeatureWidget from "@components/Widgets/Feature/One";
import data from "./data";
import SectionHeading from "@components/Layout/SectionHeading";

let settingProps = {
  sectionHeading: {
    title: "Ultimate method & amazing features to change your life",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-10",
    classes: {
      row: "justify-content-center",
      className: "text-center",
      title: "heading-md text-black",
    },
  },
};

const FeatureSection = () => {
  return (
    <div className="home-3_feature-section section-padding-100" id="feature">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />
        <div className="row justify-content-center gutter-y-default">
          {data?.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-xs-10"
              data-aos-duration="1000"
              data-aos="fade-left"
              data-aos-delay={item.aos}
            >
              <FeatureWidget {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
