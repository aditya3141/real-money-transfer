import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
import PricingCardThree from "@components/Cards/Price/Three/PricingCardThree";
import { useState } from "react";
const settingProps = {
  sectionHeading: {
    title: "The perfect web hosting plan for your success",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    badge: {
      text: "Popular Hosting Plan",
      class: "badge badge--yellow",
    },
    classes: {
      title: "heading-lg heading-lg--cabin text-white",
      row: "text-center justify-content-center",
    },
  },
};
const PricingSection = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <>
      <div className="home-7_pricing-section section-padding-120" id="pricing">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading}>
            <div className="home-7_pricing-control-block">
              <div className="pricing-control-rounded">
                <span
                  className={monthly ? "active" : ""}
                  onClick={() => setMonthly(true)}
                  data-pricing-trigger="pricing-1"
                  data-target="monthly"
                >
                  Monthly
                </span>
                <span
                  onClick={() => setMonthly(!monthly)}
                  className={`${monthly ? "" : "active"}`}
                  data-pricing-trigger="pricing-1"
                  data-target="yearly"
                >
                  Yearly
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
                className="col-lg-4 col-md-6"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                <PricingCardThree
                  planName={cardItem?.name}
                  price={monthly ? cardItem.monthlyPrice : cardItem.yearlyPrice}
                  btnClass={cardItem?.btnClass}
                  isActive={cardItem?.isActive ? cardItem?.isActive : false}
                >
                  <PricingCardThree.List>
                    {cardItem?.listItem?.map((listItem, index) => (
                      <PricingCardThree.ListItem
                        className={listItem.class}
                        key={index}
                      >
                        {listItem.text}
                      </PricingCardThree.ListItem>
                    ))}
                  </PricingCardThree.List>
                </PricingCardThree>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
