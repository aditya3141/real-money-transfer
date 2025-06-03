import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import PriceCardOne from "../../../../components/Cards/Price/One/PriceCardOne";
import data from "./data";
const settingProps = {
  sectionHeading: {
    title: "Choice the right pricing plan that suits your need",
    column: "col-xxl-6 col-lg-7 col-md-8",
    classes: {
      title: "heading-md text-black",
      row: "justify-content-center text-center",
    },
  },
};

const PricingSection = () => {
  return (
    <div className="service_pricing-section section-padding-120 bg-light-2">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />

        <div
          className="row row--custom"
          data-plan-id="pricing-1"
          data-plan-active="monthly"
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <PriceCardOne {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
