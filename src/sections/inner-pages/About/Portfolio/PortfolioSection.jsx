import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import Button from "@components/Buttons/Button";
import PortfolioWidgetOne from "@components/Widgets/Portfolio/One/PortfolioWidgetOne";
import data from "./data";
const settingProps = {
  sectionHeading: {
    type: "double",
    title: "We create world-class web design, & branding",
    classes: {
      title: "heading-md text-black",
      row: "text-center text-md-initial",
      columnLeft: "col-xl-6 col-lg-6 col-md-8",
      columnRight: "col-xl-3 col-lg-4 col-md-4",
    },
  },
};
const PortfolioSection = () => {
  return (
    <>
      <div className="about_portfolio-section section-padding-120">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading}>
            <Button className="rounded-pill btn-fill--up">
              See more works
            </Button>
          </SectionHeading>

          <div className="row row--portfolio-gutter">
            {data?.map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-xs-10"
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <PortfolioWidgetOne {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
