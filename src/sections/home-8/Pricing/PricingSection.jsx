import SectionHeading from "@components/Layout/SectionHeading";
import { useState } from "react";
import PricingCardSix from "@components/Cards/Price/Six";

const settingProps = {
  sectionHeading: {
    title: "Our pricing plans are designed for your favor",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-10",
    text: "Starting any business has a cost, so you need to determine how you will cover the costs. You have ways to finance your startup",
    classes: {
      title: "heading-lg text-black-2",
      row: "text-center justify-content-center",
    },
  },
};
const PricingSection = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <>
      <div
        className="home-8_pricing-section bg-cream section-padding-120"
        id="pricing"
      >
        <div className="particles">
          <img
            src="/image/home-8/particle-circle-3.svg"
            alt="image alt"
            className="particle-1"
          />
          <img
            src="/image/home-8/particle-circle-2.svg"
            alt="image alt"
            className="particle-2"
          />
          <img
            src="/image/home-8/particle-circle-3.svg"
            alt="image alt"
            className="particle-3"
          />
        </div>
        <div className="home-8_pricing-shape">
          <img src="/image/home-8/pricing-shape.svg" alt="shapes" />
        </div>
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
                  className={`pricing-control-3__indicator indicator-green toggle ${
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
            className="row justify-content-center"
            data-plan-id="pricing-1"
            data-plan-active="monthly"
          >
            <div className="col-xxl-10 col-lg-12 col-md-8 col-sm-10">
              <PricingCardSix isMonthly={monthly} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
