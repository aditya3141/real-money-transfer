import Button from "@components/Buttons/Button";
import { hasClassProps } from "@utils/helpers";

const PricingCardTwo = ({
  icon,
  price,
  planName,
  children,
  btnClass = null,
}) => {
  return (
    <div className="pricing-card-2 h-100">
      <div className="pricing-card-2__head">
        <img src={icon} alt="icon" className="pricing-card-2__icon" />
        <h3 className="pricing-card-2__plan">{planName}</h3>
        <h3 className="pricing-card-2__price-block">
          <span className="pricing-card-2__price">{price}</span>
          <span className="pricing-card-2__time">/Per Month</span>
        </h3>
      </div>
      <div className="pricing-card-2__body">
        {children}
        <div className="pricing-card-2__button">
          <Button href="/pricing" className={`${hasClassProps(btnClass)} `}>
            Choose Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

PricingCardTwo.List = ({ children }) => {
  return <ul className="pricing-card-2__list">{children}</ul>;
};
PricingCardTwo.ListItem = ({ children }) => {
  return (
    <li>
      <img src="/image/icons/icon-check-black.svg" alt="icon check black" />
      {children}
    </li>
  );
};

export default PricingCardTwo;
