const CareerCard = ({ title, text, time, location, money }) => {
  return (
    <>
      <div className="career-card">
        <div className="career-card__body">
          <h3 className="career-card__title">{title}</h3>
          <p>{text}</p>
        </div>
        <div className="career-card__job-info">
          <span>
            <img src="/image/icons/clock.svg" alt="clock" />
            {time}
          </span>
          <span>
            <img src="/image/icons/location.svg" alt="location" />
            {location}
          </span>
          <span>
            <img src="/image/icons/cash.svg" alt="cash" />
            {money}
          </span>
        </div>
        <a
          href="/career-details"
          className="btn-link btn-arrow career-card__link"
        >
          Apply now
        </a>
      </div>
    </>
  );
};

export default CareerCard;
