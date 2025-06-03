import Button from "../../../Buttons/Button";

const PriceCardOne = ({
  name,
  price,
  monthly,
  monthlyPrice,
  yearlyPrice,
  listItems,
  isActive,
  btnClass,
}) => {
  return (
    <>
      <div className={`pricing-card ${isActive === "active" ? "active" : ""}`}>
        <div className="pricing-card__head">
          <h3 className="pricing-card__plan">{name}</h3>
          <h3 className="pricing-card__price-block">
            $
            <span
              className="pricing-card__price dynamic-value"
              data-yearly="00"
              data-monthly="00"
            >
              {price ? price : monthly ? monthlyPrice : yearlyPrice}
            </span>
            /month
          </h3>
          <p>No credit card required</p>
        </div>
        <div className="pricing-card__body">
          <ul className="pricing-card__list">
            {listItems?.map((listItem, index) => (
              <li
                key={index}
                className={`${
                  listItem?.class === "disabled" ? listItem?.class : ""
                }`}
              >
                {listItem.text}
              </li>
            ))}
          </ul>
          <div className="pricing-card__button">
            <Button href="#" animation={false} className={btnClass}>
              Purchase now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCardOne;
