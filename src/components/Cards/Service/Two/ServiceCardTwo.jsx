const ServiceCardTwo = ({ iconSrc, title, description, aos }) => {
  return (
    <a
      className="service-card undefined aos-init aos-animate"
      data-aos-duration={1000}
      data-aos={aos}
      href="/service-details"
    >
      <div className="service-card__icon">
        <img src={iconSrc} alt="image alt" className="inline-svg" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title} </h3>
        <p>{description}</p>
        <span className="service-card__link btn-link btn-arrow">
          Find out more
        </span>
      </div>
    </a>
  );
};

export default ServiceCardTwo;
