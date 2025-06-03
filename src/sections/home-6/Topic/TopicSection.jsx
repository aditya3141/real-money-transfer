import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import Button from "@components/Buttons/Button";
import TickerBlock from "./TickerBlock";
const settingProps = {
  sectionHeading: {
    type: "double",
    title: "We automate cold outreach across multiple channels",
    classes: {
      title: "heading-md heading-md--general-sans text-l5-secondary",
      row: "justify-content-center text-center text-lg-initial justify-content-lg-between",
      columnLeft: "col-xxl-6 col-xl-7 col-lg-8 col-md-9 ",
      columnRight: "col-xl-3 col-lg-4 col-md-4",
    },
  },
};
const TopicSection = () => {
  return (
    <>
      <div className="home-6_topic-section section-padding-120">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading}>
            <Button className="btn btn-primary btn-fill--up">
              See All Integrations
            </Button>
          </SectionHeading>
          <div className="ticker-03_section">
            <div className="ticker-03_wrapper">
              <TickerBlock />
              <TickerBlock />
              <TickerBlock />
              <TickerBlock />
              <TickerBlock />
              <TickerBlock />
            </div>
            <div className="ticker-03_wrapper">
              <TickerBlock className="ticker-03_content--reverse" />
              <TickerBlock className="ticker-03_content--reverse" />
              <TickerBlock className="ticker-03_content--reverse" />
              <TickerBlock className="ticker-03_content--reverse" />
              <TickerBlock className="ticker-03_content--reverse" />
              <TickerBlock className="ticker-03_content--reverse" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicSection;
