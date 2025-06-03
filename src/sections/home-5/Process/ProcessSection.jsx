import SectionHeading from "@components/Layout/SectionHeading";
import data from "./data";

const ProcessSection = () => {
  const settingProps = {
    sectionHeading: {
      title: "We follow a simple, yet effective SEO ranking process",
      column: "col-xxl-7 col-xl-8 col-lg-8 col-md-10",
      classes: {
        title: "fw-600 heading-md heading-md--general-sans text-l5-secondary",
        row: "justify-content-center text-center",
      },
    },
  };
  return (
    <div className="home-5_process-section bg-offwhite-3">
      <div className="container">
        <div className="home-5_process-devider">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row process-widget-row">
            {data?.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="process-widget">
                  <div className="process-widget__count">
                    <span>{item.count}</span>
                  </div>
                  <div className="process-widget__body">
                    <h3 className="process-widget__title">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
