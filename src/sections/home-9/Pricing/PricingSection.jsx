import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { useState } from "react";

const settingProps = {
  sectionHeading: {
    title: "Perfect fit regardless of your specific budget",
    column: "col-xxl-7 col-xl-8 col-lg-9 col-md-10",
    classes: {
      title: "heading-lg--syne heading-lg text-black-3 section-title fw-700",
      row: "text-center justify-content-center",
    },
  },
};
const PricingSection = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <>
      <div
        className="home-9_pricing-section bg-offwhite padding-bottom-150 bg-offwhite-dark"
        id="pricing"
      >
        <div className="home-9_pricing-shape">
          <img src="/image/home-9/pricing-shape.svg" alt="image alt" />
        </div>
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading}>
            <div className="home-9_pricing-control-block">
              <div className="home-9_pricing-control-shape">
                <img
                  src="/image/home-9/pricing-card-shape.svg"
                  alt="discound icon"
                />
              </div>
              <div className="pricing-control-3">
                <span
                  className={monthly ? "active" : ""}
                  data-pricing-trigger="pricing-1"
                  data-target="monthly"
                >
                  Per Month
                </span>
                <span
                  data-pricing-trigger="pricing-1"
                  data-target="yearly"
                  className={`pricing-control-3__indicator  toggle ${
                    monthly ? "" : "active"
                  }`}
                  onClick={() => setMonthly(!monthly)}
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
            <div
              className="col-xl-4 col-md-6"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <div className="pricing-card-4 bg-orange h-100">
                <div className="pricing-card-4__head">
                  <h3 className="pricing-card-4__plan">Personal</h3>
                  <h3 className="pricing-card-4__price-block">
                    <span className="pricing-card__sign">$</span>
                    <span
                      className="pricing-card-4__price dynamic-value"
                      data-yearly="1.99"
                      data-monthly="2.99"
                    >
                      {monthly ? "2.99" : "1.99"}
                    </span>
                    <span className="pricing-card-4__time">/Per Month</span>
                  </h3>
                </div>
                <div className="pricing-card-4__body">
                  <ul className="pricing-card-4__list">
                    <li> Time tracking</li>
                    <li> Unlimited projects and clients</li>
                    <li> Reporting</li>
                    <li> Timer button in 50+ web apps</li>
                  </ul>
                </div>
                <div className="pricing-card-4__button">
                  <a
                    href="#"
                    className="btn-masco btn-primary-l09 rounded-pill w-100"
                  >
                    30-Day Free Trial
                  </a>
                  <div className="pricing-card-4__button-bottom-text">
                    <span>No credit card required*</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <div className="pricing-card-4 bg-primary-l09 h-100">
                <div className="pricing-card-4__head">
                  <h3 className="pricing-card-4__plan">Small Business</h3>
                  <h3 className="pricing-card-4__price-block">
                    <span className="pricing-card__sign">$</span>
                    <span
                      className="pricing-card-4__price dynamic-value"
                      data-yearly="9.99"
                      data-monthly="19.00"
                    >
                      {monthly ? " 19.00" : "9.99"}
                    </span>
                    <span className="pricing-card-4__time">/Per Month</span>
                  </h3>
                </div>
                <div className="pricing-card-4__body">
                  <ul className="pricing-card-4__list">
                    <li> Apps and sites usage reports</li>
                    <li>Screenshots capturing</li>
                    <li> Payroll for employees</li>
                    <li> Timer button in 50+ web apps</li>
                  </ul>
                </div>
                <div className="pricing-card-4__button">
                  <a
                    href="#"
                    className="btn-masco btn-secondary-l09 rounded-pill w-100"
                  >
                    30-Day Free Trial
                  </a>
                  <div className="pricing-card-4__button-bottom-text">
                    <span>No credit card required*</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <div className="pricing-card-4 bg-secondary-l09 h-100">
                <div className="pricing-card-4__head">
                  <h3 className="pricing-card-4__plan">Enterprise Team</h3>
                  <h3 className="pricing-card-4__price-block">
                    <span className="pricing-card__sign">$</span>
                    <span
                      className="pricing-card-4__price dynamic-value"
                      data-yearly="29.99"
                      data-monthly="49.99"
                    >
                      {monthly ? " 49.99" : "29.99"}
                    </span>
                    <span className="pricing-card-4__time">/Per Month</span>
                  </h3>
                </div>
                <div className="pricing-card-4__body">
                  <ul className="pricing-card-4__list">
                    <li> Calendar integrations </li>
                    <li> Billable rates & money tracking</li>
                    <li> Task management & budgeting</li>
                    <li> Activity levels for employees</li>
                  </ul>
                </div>
                <div className="pricing-card-4__button">
                  <a
                    href="#"
                    className="btn-masco btn-primary-l09 rounded-pill w-100"
                  >
                    30-Day Free Trial
                  </a>
                  <div className="pricing-card-4__button-bottom-text">
                    <span>No credit card required*</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
