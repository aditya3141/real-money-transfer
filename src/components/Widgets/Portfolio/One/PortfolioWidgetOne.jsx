import { Link } from "react-router-dom";

const PortfolioWidgetOne = ({
  url,
  className,
  buttonText,
  image,
  title,
  category,
  text,
}) => {
  return (
    <Link
      to={url}
      className={`portfolio-widget ${className ? " " + className : ""}`}
    >
      <div className="portfolio-widget_image-block">
        <img src={image} alt="portfolio image" />
      </div>
      <div className="portfolio-widget__title-block">
        <h3 className="portfolio-widget__title">{title}</h3>
        {category ? (
          <span className="portfolio-widget__category">{category}</span>
        ) : null}
      </div>
      {buttonText ? (
        <div className="portfolio-widget__link">
          <span className="btn-link btn-arrow">{buttonText}</span>
        </div>
      ) : null}
      {text ? (
        <div className="portfolio-widget__text">
          <p>{text}</p>
        </div>
      ) : null}
    </Link>
  );
};

export default PortfolioWidgetOne;
