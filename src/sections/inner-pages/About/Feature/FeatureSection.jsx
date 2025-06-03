import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
import FeatureWidgetSeven from "@components/Widgets/Feature/Seven/FeatureWidgetSeven";
const settingProps = {
  sectionHeading: {
    title: "Our core values that drive everything we do",
    column: "col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-10",
    classes: {
      title: "heading-md text-black",
      row: "justify-content-center text-center",
    },
  },
};
const FeatureSection = () => {
  return (
    <>
      <div className="about_feature-section section-padding-120 bg-light-2">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row feature-widget-7-row  ">
            {data?.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-xs-8 col-9">
                <FeatureWidgetSeven {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
