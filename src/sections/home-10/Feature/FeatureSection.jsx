import SectionHeading from "@components/Layout/SectionHeading";
import FeatureWidgetFive from "@components/Widgets/Feature/Five/FeatureWidgetFive";
import data from "./data";
const settingProps = {
  sectionHeading: {
    title: "Get all kinds of writing benefits from AI Writer",
    column: "col-xxl-7 col-lg-8 col-md-9 col-sm-10 col-xs-11",
    classes: {
      title: "heading-lg heading-lg--clash-display text-black-3",
      row: "justify-content-center text-center",
    },
  },
};
const FeatureSection = () => {
  return (
    <>
      <div
        className="home-10_feature-section padding-top-120 padding-bottom-150 bg-offwhite-2"
        id="features"
      >
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row feature-widget-5-divider">
            {data?.map((item, index) => (
              <FeatureWidgetFive key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
