import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import PriceCardOne from "@components/Cards/Price/One/PriceCardOne";
import data from "./data";
import { useState } from "react";

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
  const [monthly, setMonthly] = useState(true);
  return (
    <div className="service_pricing-section section-padding-120 bg-light-2">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading}>
          <div className="home-8_pricing-control-block">
            <div className="pricing-control-3">
              <span
                className={monthly ? "active" : ""}
                data-pricing-trigger="pricing-1"
                data-target="monthly"
              >
                Per Month
              </span>
              <span
                onClick={() => setMonthly(!monthly)}
                className={`pricing-control-3__indicator indicator-white toggle ${
                  monthly ? "" : "active"
                }`}
                data-pricing-trigger="pricing-1"
                data-target="yearly"
              ></span>
              <span
                className={monthly ? "" : "active"}
                data-pricing-trigger="pricing-1"
                data-target="yearly"
              >
                Per Year
              </span>
            </div>
          </div>
        </SectionHeading>

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
              <PriceCardOne monthly={monthly} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
