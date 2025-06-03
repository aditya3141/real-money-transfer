import { hasClassProps } from "@utils/helpers";
import Button from "../../../Buttons/Button";

const PricingCardThree = ({
  planName,
  price,
  children,
  btnClass,
  isActive,
}) => {
  return (
    <>
      <div className={`pricing-card-3 h-100 ${isActive ? "active" : ""}`}>
        <div className="pricing-card-3__head">
          <h3 className="pricing-card-3__plan">{planName}</h3>
          <div className="pricing-card-3__price-block">
            <h3>
              <span className="pricing-card-3__price-sign">$</span>
              <span
                className="pricing-card-3__price dynamic-value"
                data-yearly="2.09"
                data-monthly="2.99"
              >
                {price}
              </span>
            </h3>
            <span className="pricing-card-3__price-time">Per month</span>
          </div>
        </div>
        <div className="pricing-card-3__body">{children}</div>
        <div className="pricing-card-3__button">
          <Button
            href="/pricing"
            animation={false}
            className={`${hasClassProps(btnClass)}`}
          >
            Purchase now
          </Button>
        </div>
      </div>
    </>
  );
};

PricingCardThree.List = ({ children }) => {
  return <ul className="pricing-card-3__list">{children}</ul>;
};

PricingCardThree.ListItem = ({ children, className }) => {
  return <li className={`${hasClassProps(className)}`}>{children}</li>;
};
export default PricingCardThree;
