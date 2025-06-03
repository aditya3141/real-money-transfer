import Button from "../../../Buttons/Button";

const PricingCardSix = ({ isMonthly }) => {
  return (
    <>
      <div className=" pricing-card-6">
        <div className="pricing-card-6__head">
          <span className="pricing-card-6__plan">For business</span>
          <h2 className="pricing-card-6__price-plan">
            <span
              className="pricing-card-6__price dynamic-value"
              data-yearly="$24.99"
              data-monthly="$30.00"
            >
              {isMonthly ? "$30.00" : "$24.99"}
            </span>
            <span className="pricing-card-6__time">/Per Month</span>
          </h2>
          <p>
            One way to determine how much money you need is to do a break-even
            analysis.
          </p>
        </div>
        <div className="pricing-card-6__body">
          <h3 className="pricing-card-6__badge">That includes:</h3>
          <ul className="pricing-card-6__list">
            <li className="pricing-card-6-list-item">
              <img
                src="./image/icons/icon-check-purple.svg"
                alt="image alt"
                className="icon"
              />
              <span>Live chat and email</span>
            </li>
            <li className="pricing-card-6-list-item">
              <img
                src="./image/icons/icon-check-purple.svg"
                alt="image alt"
                className="icon"
              />
              <span>Fully managed program</span>
            </li>
            <li className="pricing-card-6-list-item">
              <img
                src="./image/icons/icon-check-purple.svg"
                alt="image alt"
                className="icon"
              />
              <span>Experience team members</span>
            </li>
            <li className="pricing-card-6-list-item">
              <img
                src="./image/icons/icon-check-purple.svg"
                alt="image alt"
                className="icon"
              />
              <span>Step by step working process</span>
            </li>
            <li className="pricing-card-6-list-item">
              <img
                src="./image/icons/icon-check-purple.svg"
                alt="image alt"
                className="icon"
              />
              <span>Re-evaluation project management</span>
            </li>
          </ul>
          <div className="pricing-card-6__button">
            <Button
              href="#"
              animation={false}
              className="btn-masco btn-primary-l08 btn-fill--slide w-100"
            >
              <span>Choose Plan</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCardSix;
