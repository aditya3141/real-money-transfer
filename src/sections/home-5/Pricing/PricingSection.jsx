import SectionHeading from "@components/Layout/SectionHeading";
import PricingCardTwo from "@components/Cards/Price/Two/PricingCardTwo";
import { useState } from "react";
import data from "./data.json";
const settingProps = {
  sectionHeading: {
    title: "Explore our SEO service plans and choose your plan",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      title: "heading-md heading-md--general-sans text-l5-secondary",
      row: "text-center justify-content-center",
    },
  },
};
const PricingSection = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <div className="home-5_pricing-section bg-offwhite section-padding-120 bg-offwhite-3">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading}>
          <div className="home-5_pricing-control-block">
            <div className="pricing-control-2">
              <span className={monthly ? "active" : ""} data-target="monthly">
                Per Month
              </span>
              <span
                onClick={() => setMonthly(!monthly)}
                data-target="yearly"
                className={`pricing-control-2__indicator toggle ${
                  monthly ? "" : "active"
                }`}
              ></span>
              <span data-target="yearly" className={monthly ? "" : "active"}>
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
          {data?.map((cardItem, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <PricingCardTwo
                planName={cardItem?.name}
                price={monthly ? cardItem.monthlyPrice : cardItem.yearlyPrice}
                icon={cardItem.icon}
                btnClass={cardItem?.btnClass}
              >
                {cardItem?.listItem?.map((listItem, index) => (
                  <PricingCardTwo.List key={index}>
                    <PricingCardTwo.ListItem>
                      {listItem}
                    </PricingCardTwo.ListItem>
                  </PricingCardTwo.List>
                ))}
              </PricingCardTwo>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
