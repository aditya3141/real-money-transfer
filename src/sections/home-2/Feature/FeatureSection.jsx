import FeatureCard from "@components/Cards/Feature/One/FeatureCardOne";
import SectionHeading from "@components/Layout/SectionHeading";
import data from "./data";

let settingProps = {
  sectionHeading: {
    title: "Contains modern features for better experience",
    column: "col-xxl-6 col-lg-7 col-md-9",
    classes: {
      title: "heading-md text-black",
      row: "justify-content-center text-center",
    },
  },
};
const FeatureSection = () => {
  return (
    <div className="home-2_feature-section section-padding">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />
        <div className="row justify-content-center gutter-y-default">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos-duration="1000"
              data-aos="fade-left"
              data-aos-delay={200 * (index + 1)}
            >
              <FeatureCard {...item} className="h-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
