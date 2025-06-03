import ProcessCard from "@components/Cards/Process";
import processSteps from "./data";
const ProcessSection = () => {
  return (
    <div className="home-6_process-section section-padding-120">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
            <div className="section-heading">
              <h2 className="section-heading__title heading-md heading-md--general-sans text-white">
                A simple process to use is a cold email drip campaign
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--custom">
          {processSteps.map(({ step, iconSrc, title, text }, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6 col-sm-10 col-auto"
              data-aos="fade-left"
              data-aos-delay={step * 100}
            >
              <ProcessCard
                key={index}
                step={step}
                iconSrc={iconSrc}
                title={title}
                text={text}
                className={"h-100"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
