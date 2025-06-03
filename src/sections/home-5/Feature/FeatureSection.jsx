import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
const settingProps = {
  sectionHeading: {
    title: "Turn traffic with insanely SEO & growth into revenue",
    column: "col-xxl-6 col-lg-7 col-md-9 col-sm-12 col-xs-11",
    classes: {
      title: "heading-md heading-md--general-sans text-l5-secondary",
      row: "justify-content-center text-center",
    },
  },
};
const FactSection = () => {
  return (
    <div className="home-5_feature-section padding-bottom-120 bg-cream">
      <div className="container">
        <div className="home-5_feature-section-wrapper">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row feature-widget-devider justify-content-center">
            {data?.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-10"
                data-aos="fade-up"
                data-aos-delay="{{100 * loop.index}}"
              >
                <div className="feature-widget-2">
                  <div className="feature-widget-2__icon">
                    <img src={item.icon} alt="feature icon" />
                  </div>
                  <h4 className="feature-widget-2__title">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSection;
