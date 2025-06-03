import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
import FeatureWidgetThree from "../../../components/Widgets/Feature/Three/FeatureWidgetThree";
const settingProps = {
  sectionHeading: {
    title: "Appropriate features for proper use of time",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      title: "heading-lg heading-lg--clash-display text-black-3",
      row: "justify-content-center text-center",
    },
  },
};
const FeatureSection = () => {
  return (
    <>
      <div className="home-9_feature-section section-padding-120" id="features">
        <div className="home-9_feature-shape">
          <img src="/image/home-9/feature-shape.svg" alt="image alt" />
        </div>
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row feature-widget-3-row">
            {data?.map((item, index) => (
              <FeatureWidgetThree key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
