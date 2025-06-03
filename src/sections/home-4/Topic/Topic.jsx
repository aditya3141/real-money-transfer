import TickerBlock from "./TickerBlock";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

const settingsProps = {
  sectionHeading: {
    title: "Here are numerous topics that will enhance your skills",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      title: "heading-md text-black heading-md--dm-sans",
      row: "justify-content-center text-center",
    },
  },
};
const Topic = () => {
  return (
    <div className="home-4_topic-section padding-bottom-120 bg-cream">
      <div className="container">
        <SectionHeading {...settingsProps.sectionHeading} />
      </div>
      <div className="ticker-02_section">
        <div className="ticker-02_wrapper">
          <TickerBlock />
          <TickerBlock />
          <TickerBlock />
          <TickerBlock />
          <TickerBlock />
          <TickerBlock />
        </div>
        <div className="ticker-02_wrapper">
          <TickerBlock className="ticker-02_content--reverse" />
          <TickerBlock className="ticker-02_content--reverse" />
          <TickerBlock className="ticker-02_content--reverse" />
          <TickerBlock className="ticker-02_content--reverse" />
          <TickerBlock className="ticker-02_content--reverse" />
          <TickerBlock className="ticker-02_content--reverse" />
        </div>
      </div>
    </div>
  );
};

export default Topic;
